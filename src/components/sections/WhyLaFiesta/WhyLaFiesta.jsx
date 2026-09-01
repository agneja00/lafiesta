import styles from "./WhyLaFiesta.module.scss";
import { useTranslation } from "react-i18next";
import CardList from "@/components/CardList/CardList";
import { HOME_REASONS } from "@/constants/homeCards";

const WhyLaFiesta = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("whyLaFiesta.title")}</h2>

        <CardList items={HOME_REASONS} variant="divided" />
      </div>
    </section>
  );
};

export default WhyLaFiesta;
