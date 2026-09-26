import styles from "./Contacts.module.scss";
import { useTranslation } from "react-i18next";
import { FaWaze } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";

import { GOOGLE_MAPS_EMBED_SRC, GOOGLE_MAPS_URL, WAZE_URL } from "@/constants/contact";
import ContactCard from "@/components/ContactCard/ContactCard";
import ContactActions from "@/components/ContactActions/ContactActions";
import Button from "@/components/Button/Button";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <ContactCard
      id="kontaktai"
      titleId="contacts-title"
      title={t("contacts.title")}
      description={t("contacts.description")}
      actions={<ContactActions variant="menu" />}
      decoration
    >
      <div className={styles.mapFrame}>
        <iframe
          src={GOOGLE_MAPS_EMBED_SRC}
          title={t("contacts.mapTitle")}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className={styles.mapButtons}>
        <Button
          as="a"
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noreferrer"
          variant="outline"
          icon={SiGooglemaps}
          className={styles.mapButton}
        >
          {t("contacts.openGoogleMaps")}
        </Button>

        <Button
          as="a"
          href={WAZE_URL}
          target="_blank"
          rel="noreferrer"
          variant="outline"
          icon={FaWaze}
          className={styles.mapButton}
        >
          {t("contacts.openWaze")}
        </Button>
      </div>
    </ContactCard>
  );
};

export default Contacts;
