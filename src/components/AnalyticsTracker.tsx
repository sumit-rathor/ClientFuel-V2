import { useEffect } from "react";
import { useLocation } from "react-router";
import ReactGA from "react-ga4";

export const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && import.meta.env.VITE_GA_ID) {
      ReactGA.send({ 
        hitType: "pageview", 
        page: location.pathname + location.search + location.hash 
      });
    }
  }, [location]);

  return null;
};
