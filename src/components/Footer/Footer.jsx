import styles from "./Footer.module.scss";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { LOGO_URL } from "@/constants/media";
import { PHONE_HREF, INSTAGRAM_URL } from "@/constants/contact";
import NavigationLinks from "../NavigationLinks/NavigationLinks";

const Footer = () => {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link to={`/${lang}`} className={styles.logoLink}>
            <img src={LOGO_URL} alt="La Fiesta Logo" className={styles.logo} />
          </Link>

          <p className={styles.tagline}>{t("footer.tagline")}</p>
        </div>

        <nav aria-label="Footer navigation">
          <NavigationLinks variant="footer" />
        </nav>

        <ul className={styles.contact}>
          <li>
            <a href={PHONE_HREF} className={styles.contactLink}>
              <FaPhoneAlt aria-hidden="true" />
              <span>+370 600 00000</span>
            </a>
          </li>

          <li>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <FaInstagram aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </li>
        </ul>

        <div className={styles.cta}>
          <span className={styles.heart} aria-hidden="true">
            ♡
          </span>

          <h3 className={styles.ctaTitle}>{t("footer.cta.title")}</h3>

          <p className={styles.ctaDescription}>{t("footer.cta.description")}</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.bottomText}>© 2026 La Fiesta. {t("footer.rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
