import { useEffect, useState } from "react";

const DEFAULT_HYSTERESIS = 50;

const useScrolled = (threshold, hysteresis = DEFAULT_HYSTERESIS) => {
  const [isScrolled, setIsScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > threshold
  );

  useEffect(() => {
    const exitAt = Math.max(0, threshold - hysteresis);
    let frame = null;

    const update = () => {
      frame = null;
      const y = window.scrollY;
      setIsScrolled((prev) => (prev ? y > exitAt : y > threshold));
    };

    const handleScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [threshold, hysteresis]);

  return isScrolled;
};

export default useScrolled;
