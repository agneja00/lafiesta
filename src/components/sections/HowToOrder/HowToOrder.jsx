import styles from "./HowToOrder.module.scss";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import CardList from "@/components/CardList/CardList";
import { ORDER_STEPS } from "@/constants/homeCards";

const HowToOrder = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle>{t("orderSteps.title")}</SectionTitle>

        <CardList items={ORDER_STEPS} variant="step" />
      </div>
    </section>
  );
};

export default HowToOrder;
