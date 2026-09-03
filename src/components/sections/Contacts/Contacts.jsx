import styles from "./Contacts.module.scss";
import { useTranslation } from "react-i18next";
import { FLOWERS_DECORATION } from "@/constants/media";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock, FaWaze } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { GOOGLE_MAPS_EMBED_SRC, GOOGLE_MAPS_URL, WAZE_URL } from "@/constants/contact";
import Button from "@/components/Button/Button";

const WORKING_DAYS = "I–VII";
const WORKING_TIME = "9:00 – 20:00";
const ADDRESS = "Kapsų g. 2 (Naujininkų Turgelis)";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="kontaktai">
      <img
        className={styles.bleedImage}
        src={FLOWERS_DECORATION}
        alt="Flowers decoration"
        aria-hidden="true"
        width="500"
        height="600"
        loading="lazy"
      />

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {t("contacts.title")} <span aria-hidden="true">♡</span>
            </h2>

            <p className={styles.description}>{t("contacts.description")}</p>

            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <IoLocationSharp size={22} className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>{t("contacts.addressLabel")}</span>
                  <span className={styles.infoValue}>{ADDRESS}</span>
                </div>
              </li>

              <li className={styles.infoItem}>
                <FaClock size={18} className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>{t("contacts.hoursLabel")}</span>
                  <dl className={styles.hoursTable}>
                    <div className={styles.hoursRow}>
                      <dt>{WORKING_DAYS}</dt>
                      <dd>{WORKING_TIME}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.mapBlock}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
