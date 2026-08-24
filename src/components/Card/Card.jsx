import styles from "./Card.module.scss";

const Card = ({ icon, title, description, variant = "outlined" }) => {
  return (
    <li className={`${styles.card} ${styles[variant]}`}>
      <img src={icon} alt="" aria-hidden="true" className={styles.icon} />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </li>
  );
};

export default Card;
