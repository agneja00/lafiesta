import styles from "./Hero.module.scss";
import { HERO_URL, HERO_DESKTOP } from "@/constants/media";
import Button from "../Button/Button";

const Hero = ({ title, description, buttonText, buttonTo }) => {
  return (
    <section className={styles.hero}>
      <picture className={styles.imageWrapper}>
        <source media="(min-width: 64rem)" srcSet={HERO_DESKTOP} />

        <img src={HERO_URL} alt="" className={styles.image} aria-hidden="true" />
      </picture>

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{description}</p>

        {buttonText && buttonTo && (
          <Button as="link" to={buttonTo} variant="primary" size="large">
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default Hero;
