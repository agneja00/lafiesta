import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const HASH_SCROLL_DELAY = 100;

const getBehavior = (smooth) => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return smooth && !reduceMotion ? "smooth" : "instant";
};

const ScrollToHash = () => {
  const location = useLocation();
  const previous = useRef(null);

  useEffect(() => {
    const prev = previous.current;
    previous.current = location;

    const samePage = prev !== null && prev.pathname === location.pathname;
    const onlySearchChanged =
      samePage && prev.hash === location.hash && prev.search !== location.search;

    if (onlySearchChanged) return;

    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        element?.scrollIntoView({ behavior: getBehavior(true), block: "start" });
      }, HASH_SCROLL_DELAY);

      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: getBehavior(samePage) });
  }, [location]);

  return null;
};

export default ScrollToHash;
