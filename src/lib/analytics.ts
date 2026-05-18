import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;

export const initGA = () => {
  if (typeof window !== "undefined" && GA_ID) {
    ReactGA.initialize(GA_ID);
  }
};

export const logPageView = (path: string) => {
  if (typeof window !== "undefined") {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

export const logEvent = (category: string, action: string, label?: string) => {
  if (typeof window !== "undefined") {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};
