import styles from "./ContactActions.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebookMessenger, FaPhone, FaCommentSms } from "react-icons/fa6";
import Button from "@/components/Button/Button";
import {
  PHONE_NUMBER,
  PHONE_HREF,
  INSTAGRAM_DM_URL,
  FACEBOOK_DM_URL,
  getSmsHref,
} from "@/constants/contact";

const ContactActions = ({ photoUrl, variant = "card" }) => {
  const { t } = useTranslation();

  const [copiedUrl, setCopiedUrl] = useState(null);
  const isCopied = Boolean(photoUrl) && copiedUrl === photoUrl;

  const smsBody = photoUrl
    ? t("galleryContactCta.smsBodyPhoto", { link: photoUrl })
    : t("galleryContactCta.smsBody");

  const copyPhotoLink = () => {
    if (!photoUrl || !navigator.clipboard) return;

    navigator.clipboard
      .writeText(photoUrl)
      .then(() => setCopiedUrl(photoUrl))
      .catch(() => {});
  };

  return (
    <div className={`${styles.wrapper} ${styles[variant]}`}>
      <div className={styles.actions}>
        <Button
          as="a"
          href={INSTAGRAM_DM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={copyPhotoLink}
          variant="primary"
          icon={FaInstagram}
          className={styles.item}
        >
          {t("galleryContactCta.instagram")}
        </Button>

        <Button
          as="a"
          href={FACEBOOK_DM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={copyPhotoLink}
          variant="primary"
          icon={FaFacebookMessenger}
          className={styles.item}
        >
          {t("galleryContactCta.messenger")}
        </Button>

        <Button
          as="a"
          href={getSmsHref(smsBody)}
          variant="outline"
          icon={FaCommentSms}
          className={`${styles.item} ${styles.smsOnly}`}
        >
          {t("galleryContactCta.sms")}
        </Button>

        <Button as="a" href={PHONE_HREF} variant="outline" icon={FaPhone} className={styles.item}>
          <span className={styles.touchLabel}>{t("galleryContactCta.call")}</span>
          <span className={styles.desktopLabel}>{PHONE_NUMBER}</span>
        </Button>
      </div>

      <p className={styles.copied} role="status">
        {isCopied ? t("galleryContactCta.linkCopied") : ""}
      </p>
    </div>
  );
};

export default ContactActions;
