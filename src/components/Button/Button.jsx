import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  as = "button",
  to,
  href,
  icon: Icon,
  className = "",
  type = "button",
  ...props
}) => {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {Icon && <Icon className={styles.icon} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (as === "link" && to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
