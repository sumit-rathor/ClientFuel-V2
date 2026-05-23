import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === "production";
const app = express();

let vite: any = null;

function loadTemplateFrom(filePath: string): string {
  return fs.readFileSync(filePath, "utf-8");
}

function renderStaticFallback(res: express.Response) {
  const fallbackTemplatePath = fs.existsSync(path.join(process.cwd(), "dist/client/index.html"))
    ? path.join(process.cwd(), "dist/client/index.html")
    : path.join(process.cwd(), "index.html");

  const html = loadTemplateFrom(fallbackTemplatePath)
    .replace(/<!--ssr-head-start-->[\s\S]*<!--ssr-head-end-->/, "")
    .replace("<!--ssr-head-->", "")
    .replace("<!--ssr-outlet-->", "");

  res.status(200).set({ "Content-Type": "text/html" }).end(html);
}

// Configure compression & static files synchronously if in production
if (isProd) {
  app.use(compression());
  app.use(
    express.static(path.join(process.cwd(), "dist/client"), {
      index: false,
    })
  );
}

// Global variable or lazy loader for Vite
async function getVite() {
  if (!vite && !isProd) {
    const { createServer: createViteServer } = await import("vite");
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
  }
  return vite;
}

// In development, we need to wire up Vite middleware
if (!isProd) {
  app.use((req, res, next) => {
    getVite()
      .then((viteInstance) => {
        viteInstance.middlewares(req, res, next);
      })
      .catch((err) => next(err));
  });
}

// Define the wildcard route handler synchronously!
app.get("*", async (req, res) => {
  const url = req.originalUrl;

  try {
    let template: string;
    let render: any;

    if (!isProd) {
      const viteInstance = await getVite();
      template = loadTemplateFrom(path.join(process.cwd(), "index.html"));
      template = await viteInstance.transformIndexHtml(url, template);
      render = (await viteInstance.ssrLoadModule("/src/entry-server.tsx")).render;
    } else {
      const distTemplatePath = path.join(process.cwd(), "dist/client/index.html");
      const distServerEntryPath = path.join(process.cwd(), "dist/server/entry-server.js");

      if (!fs.existsSync(distTemplatePath) || !fs.existsSync(distServerEntryPath)) {
        console.warn("Missing SSR build artifacts in production. Serving static fallback template.");
        return renderStaticFallback(res);
      }

      template = loadTemplateFrom(distTemplatePath);
      const serverEntry = await import(distServerEntryPath);
      render = serverEntry.render;
    }

    const helmetContext = {};
    const routerContext: { statusCode?: number } = {};
    const appHtml = await render(url, helmetContext, routerContext);

    // @ts-ignore
    const { helmet } = helmetContext;

    const ssrHeadPattern = /<!--ssr-head-start-->[\s\S]*<!--ssr-head-end-->/;
    const ssrHeadContent = `
      ${helmet?.title.toString() || ""}
      ${helmet?.meta.toString() || ""}
      ${helmet?.link.toString() || ""}
      ${helmet?.script.toString() || ""}
    `;

    let html = template;
    if (ssrHeadPattern.test(template)) {
      html = template.replace(ssrHeadPattern, ssrHeadContent);
    } else {
      html = template.replace("<!--ssr-head-->", ssrHeadContent);
    }

    html = html.replace(`<!--ssr-outlet-->`, appHtml);

    const statusCode = routerContext.statusCode || 200;
    res.status(statusCode).set({ "Content-Type": "text/html" }).end(html);
  } catch (e: any) {
    if (!isProd && vite) {
      vite.ssrFixStacktrace(e);
    }
    console.error(e.stack);

    if (isProd) {
      return renderStaticFallback(res);
    }

    res.status(500).end(e.stack);
  }
});

// Start listener if not in Vercel serverless environment
if (!process.env.VERCEL) {
  const PORT = 3000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export { app };