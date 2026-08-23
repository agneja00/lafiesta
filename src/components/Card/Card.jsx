import styles from "./Card.module.scss";

const Card = ({ icon, title, description, variant = "outlined", className = "" }) => {
  const classes = [styles.card, styles[variant], className].filter(Boolean).join(" ");

  return (
    <li className={classes}>
      <img src={icon} alt="" aria-hidden="true" className={styles.icon} />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </li>
  );
};

export default Card;
