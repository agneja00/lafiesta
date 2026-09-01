import styles from "./WhyLaFiesta.module.scss";
import { useTranslation } from "react-i18next";
import CardList from "@/components/CardList/CardList";
import { HOME_REASONS } from "@/constants/homeCards";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const WhyLaFiesta = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle>{t("whyLaFiesta.title")}</SectionTitle>

        <CardList items={HOME_REASONS} variant="divided" />
      </div>
    </section>
  );
};

export default WhyLaFiesta;
