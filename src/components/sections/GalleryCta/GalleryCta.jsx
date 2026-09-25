import styles from "./GalleryCta.module.scss";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ContactCard from "@/components/ContactCard/ContactCard";
import ContactActions from "@/components/ContactActions/ContactActions";
import { ROUTES } from "@/constants/routes";

const GalleryCta = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <ContactCard
      titleId="gallery-cta-title"
      title={t("galleryContactCta.galleryTitle")}
      description={t("galleryContactCta.galleryText")}
      compact
    >
      <ContactActions variant="card" />

      <div className={styles.links}>
        <Link to={`/${lang}${ROUTES.PRICES}`} className={styles.link}>
          {t("links.prices")} →
        </Link>

        <Link to={`/${lang}#kontaktai`} className={styles.link}>
          {t("galleryContactCta.howToGet")} →
        </Link>
      </div>
    </ContactCard>
  );
};

export default GalleryCta;
