import styles from "./SectionTitle.module.scss";
import { FaHeart } from "react-icons/fa";

const SectionTitle = ({ children, subtitle, className = "" }) => {
  return (
    <div className={`${styles.wrapper} ${className}`.trim()}>
      <h2>{children}</h2>

      <span className={styles.decoration} aria-hidden="true">
        <FaHeart className={styles.heart} />
      </span>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
