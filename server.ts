import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import compression from "compression";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === "production";
const app = express();

let vite: any;

async function bootstrap() {
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(compression());
    app.use(
      express.static(path.resolve(__dirname, "dist/client"), {
        index: false,
      })
    );
  }

  app.get("*", async (req, res) => {
    const url = req.originalUrl;

    try {
      let template, render;
      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, "dist/client/index.html"), "utf-8");
        // @ts-ignore
        render = (await import("./dist/server/entry-server.js")).render;
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
      !isProd && vite.ssrFixStacktrace(e);
      console.log(e.stack);
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
}

bootstrap();

export { app };
