import styles from "./Hero.module.scss";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaImages, FaInstagram } from "react-icons/fa6";
import { HERO_URL, HERO_DESKTOP } from "@/constants/media";
import { INSTAGRAM_URL } from "@/constants/contact";
import { ROUTES } from "@/constants/routes";
import { buildTo } from "@/utils/navigation";
import Button from "../Button/Button";
import Reveal from "@/components/Reveal/Reveal";

const Hero = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <section className={styles.hero}>
      <picture className={styles.imageWrapper}>
        <source media="(min-width: 64rem)" srcSet={HERO_DESKTOP} />

        <img
          src={HERO_URL}
          alt=""
          className={styles.image}
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <div className={styles.content}>
        <Reveal as="h1" className={styles.title}>
          {t("hero.title")}
        </Reveal>

        <Reveal as="p" index={1} className={styles.description}>
          {t("hero.description")}
        </Reveal>

        <Reveal index={2} className={styles.actions}>
          <Button
            as="link"
            to={buildTo({ to: ROUTES.HOME, hash: "#galerija" }, lang)}
            variant="primary"
            size="medium"
            icon={FaImages}
            className={styles.action}
          >
            {t("hero.cta")}
          </Button>

          <Button
            as="a"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="medium"
            icon={FaInstagram}
            className={styles.action}
          >
            {t("hero.secondaryCta")}
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
