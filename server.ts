import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;
  const isProd = process.env.NODE_ENV === "production";

  let vite: any;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom", // Changed from "spa" to "custom" for SSR
    });
    app.use(vite.middlewares);
  } else {
    app.use((await import("compression")).default());
    app.use(
      (await import("serve-static")).default(path.resolve(__dirname, "dist/client"), {
        index: false,
      })
    );
  }

  app.get("*", async (req, res) => {
    const url = req.originalUrl;

    try {
      let template, render;
      if (!isProd) {
        // 1. Read index.html
        template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");

        // 2. Apply Vite HTML transforms
        template = await vite.transformIndexHtml(url, template);

        // 3. Load the server entry
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        // 1. Read static index.html
        template = fs.readFileSync(path.resolve(__dirname, "dist/client/index.html"), "utf-8");

        // 2. Load the bundled server entry
        // @ts-ignore
        render = (await import("./dist/server/entry-server.js")).render;
      }

      // 4. Render the app
      const helmetContext = {};
      const appHtml = await render(url, helmetContext);

      // 5. Inject the app-rendered HTML into the template
      // @ts-ignore - helmetContext is populated by SEO component
      const { helmet } = helmetContext;
      
      const html = template
        .replace(`<!--ssr-head-->`, `
          ${helmet?.title.toString() || ""}
          ${helmet?.meta.toString() || ""}
          ${helmet?.link.toString() || ""}
          ${helmet?.script.toString() || ""}
        `)
        .replace(`<!--ssr-outlet-->`, appHtml);

      // Handle 404
      if (url === "/404" || appHtml.includes("404")) {
          // This is a bit hacky, but in a custom setup without matchRoutes exposed, 
          // we can check if the rendered output contains 404 indicators.
          // Better: The SEO component sets Robots "noindex" for 404.
          res.status(404).set({ "Content-Type": "text/html" }).end(html);
      } else {
          res.status(200).set({ "Content-Type": "text/html" }).end(html);
      }
    } catch (e: any) {
      !isProd && vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
