import styles from "./WhatWeCreate.module.scss";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoPricetagsOutline } from "react-icons/io5";
import CardList from "@/components/CardList/CardList";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Button from "@/components/Button/Button";
import { HOME_CREATE_CARDS } from "@/constants/homeCards";
import { ROUTES } from "@/constants/routes";
import { buildTo } from "@/utils/navigation";

const WhatWeCreate = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <section className={styles.section} id="paslaugos">
      <div className={styles.container}>
        <SectionTitle>{t("whatWeCreate.title")}</SectionTitle>

        <CardList items={HOME_CREATE_CARDS} variant="outlined" />

        <div className={styles.action}>
          <Button
            as="link"
            to={buildTo({ to: ROUTES.PRICES }, lang)}
            variant="outline"
            size="medium"
            icon={IoPricetagsOutline}
          >
            {t("whatWeCreate.viewPrices")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCreate;
