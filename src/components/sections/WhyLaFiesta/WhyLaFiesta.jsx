import styles from "./WhyLaFiesta.module.scss";
import { useTranslation } from "react-i18next";
import CardList from "@/components/CardList/CardList";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Reveal from "@/components/Reveal/Reveal";
import { HOME_REASONS } from "@/constants/homeCards";

const WhyLaFiesta = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <SectionTitle>{t("whyLaFiesta.title")}</SectionTitle>
        </Reveal>

        <CardList items={HOME_REASONS} variant="divided" />
      </div>
    </section>
  );
};

export default WhyLaFiesta;
