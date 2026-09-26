import styles from "./ContactCard.module.scss";
import { useTranslation } from "react-i18next";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FLOWERS_DECORATION } from "@/constants/media";
import { ADDRESS, WORKING_DAYS, WORKING_TIME } from "@/constants/contact";

const ContactCard = ({
  id,
  titleId,
  title,
  description,
  actions,
  decoration = false,
  compact = false,
  children,
}) => {
  const { t } = useTranslation();

  const sectionClasses = [
    styles.section,
    decoration && styles.withDecoration,
    compact && styles.compact,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClasses} aria-labelledby={titleId}>
      {decoration && (
        <img
          className={styles.bleedImage}
          src={FLOWERS_DECORATION}
          alt=""
          aria-hidden="true"
          width="500"
          height="600"
          loading="lazy"
        />
      )}

      <div className={styles.card}>
        <div className={styles.content}>
          <h2 id={titleId} className={styles.title}>
            {title}
            {"\u00A0"}
            <span aria-hidden="true" className={styles.heart}>
              ♡
            </span>
          </h2>

          <p className={styles.description}>{description}</p>

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

          {actions && <div className={styles.actions}>{actions}</div>}
        </div>

        <div className={styles.aside}>{children}</div>
      </div>
    </section>
  );
};

export default ContactCard;
