import { useTranslation } from "react-i18next";
import styles from "./WhatWeCreate.module.scss";
import CardList from "@/components/CardList/CardList";
import { HOME_CREATE_CARDS } from "@/constants/homeCards";

const WhatWeCreate = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("whatWeCreate.title")}</h2>

        <CardList items={HOME_CREATE_CARDS} variant="outlined" />
      </div>
    </section>
  );
};

export default WhatWeCreate;
