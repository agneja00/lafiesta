import styles from "./WhatWeCreate.module.scss";
import { useTranslation } from "react-i18next";
import CardList from "@/components/CardList/CardList";
import { HOME_CREATE_CARDS } from "@/constants/homeCards";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const WhatWeCreate = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle>{t("whatWeCreate.title")}</SectionTitle>

        <CardList items={HOME_CREATE_CARDS} variant="outlined" />
      </div>
    </section>
  );
};

export default WhatWeCreate;
