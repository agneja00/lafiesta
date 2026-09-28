import { useEffect } from "react";

const useHeaderHeight = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      const height = element.offsetHeight;
      if (height > 0) {
        document.documentElement.style.setProperty("--header-height", `${height}px`);
      }
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);
};

export default useHeaderHeight;
