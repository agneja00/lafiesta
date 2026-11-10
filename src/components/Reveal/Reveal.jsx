import styles from "./Reveal.module.scss";
import { useEffect, useRef, useState } from "react";

const STAGGER_LIMIT = 5;

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

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
