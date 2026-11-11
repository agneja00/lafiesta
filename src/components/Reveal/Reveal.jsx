import styles from "./Reveal.module.scss";
import { useEffect, useRef, useState } from "react";

const STAGGER_LIMIT = 5;
const OBSERVER_OPTIONS = { rootMargin: "0px 0px -10% 0px", threshold: 0.1 };

const isObserverSupported = () => typeof window !== "undefined" && "IntersectionObserver" in window;

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
      const observer = new IntersectionObserver((entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, order) => {
            entry.target.style.setProperty("--reveal-order", order);
            entry.target.dataset.revealed = "true";
            observer.unobserve(entry.target);
          });
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
