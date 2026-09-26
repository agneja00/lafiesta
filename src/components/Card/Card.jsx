import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ icon, title, description, variant = "outlined", to }) => {
  const classes = [styles.card, styles[variant], to && styles.clickable].filter(Boolean).join(" ");

  return (
    <li className={classes}>
      <img src={icon} alt="" aria-hidden="true" className={styles.icon} />

      <h3 className={styles.title}>
        {to ? (
          <Link to={to} className={styles.link}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>

      <p className={styles.description}>{description}</p>

      {to && (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      )}
    </li>
  );
};

export default Card;
