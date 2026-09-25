import styles from "./GalleryCta.module.scss";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ContactCard from "@/components/ContactCard/ContactCard";
import ContactActions from "@/components/ContactActions/ContactActions";

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

      <Link to={`/${lang}#kontaktai`} className={styles.link}>
        {t("galleryContactCta.howToGet")} →
      </Link>
    </ContactCard>
  );
};

export default GalleryCta;
