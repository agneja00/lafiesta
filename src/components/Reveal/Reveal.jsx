import styles from "./Reveal.module.scss";
import { useEffect, useRef, useState } from "react";

const STAGGER_LIMIT = 5;
const STAGGER_STEP_MS = 120;
const STAGGER_MAX_DELAY_MS = 1000;
const OBSERVER_OPTIONS = { rootMargin: "0px 0px -10% 0px", threshold: 0.1 };

const isObserverSupported = () => typeof window !== "undefined" && "IntersectionObserver" in window;

const byScreenPosition = (a, b) => {
  const topDiff = Math.round(a.boundingClientRect.top) - Math.round(b.boundingClientRect.top);
  return topDiff !== 0 ? topDiff : a.boundingClientRect.left - b.boundingClientRect.left;
};

const Reveal = ({
  as: Tag = "div",
  variant = "up",
  index = 0,
  className = "",
  style,
  children,
  ...rest
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => !isObserverSupported());

  useEffect(() => {
    const element = ref.current;
    if (!element || !isObserverSupported()) return;

    if (variant === "stagger") {
      let queueEnd = 0;

      const observer = new IntersectionObserver((entries) => {
        const now = performance.now();
        let start = Math.max(now, queueEnd);

        entries
          .filter((entry) => entry.isIntersecting)
          .sort(byScreenPosition)
          .forEach((entry) => {
            const delay = Math.min(start - now, STAGGER_MAX_DELAY_MS);
            entry.target.style.setProperty("--reveal-delay", `${delay}ms`);
            entry.target.dataset.revealed = "true";
            observer.unobserve(entry.target);
            start = now + delay + STAGGER_STEP_MS;
          });

        queueEnd = start;
      }, OBSERVER_OPTIONS);

      Array.from(element.children).forEach((child) => observer.observe(child));
      return () => observer.disconnect();
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setIsVisible(true);
      observer.disconnect();
    }, OBSERVER_OPTIONS);

    observer.observe(element);
    return () => observer.disconnect();
  }, [variant]);

  const classes = [styles.reveal, styles[variant], isVisible && styles.visible, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ "--reveal-order": index % STAGGER_LIMIT, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
