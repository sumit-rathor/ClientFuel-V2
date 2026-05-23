import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { ServerStatusContext } from "./lib/ServerStatusContext";

export function render(url: string, helmetContext: any, routerContext: { statusCode?: number }) {
  const setStatusCode = (code: number) => {
    routerContext.statusCode = code;
  };

  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <ServerStatusContext.Provider value={{ setStatusCode }}>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </ServerStatusContext.Provider>
    </React.StrictMode>
  );
}
