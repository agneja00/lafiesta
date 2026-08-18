import styles from "./HeaderDesktop.module.scss";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";
import { navLinks } from "../../../constants/navLinks";
import { LOGO_URL } from "../../../constants/media";
import { PHONE_HREF } from "../../../constants/contact";
import { buildTo, isLinkActive } from "../../../utils/navigation";
import Button from "../../Button/Button";
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";

const HeaderDesktop = () => {
  const location = useLocation();
  const { lang } = useParams();
  const { t } = useTranslation();

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  const renderLink = (link) => {
    const active = isLinkActive(link, location, lang);

    return (
      <li key={`${link.to}${link.hash || ""}`}>
        <Link
          to={buildTo(link, lang)}
          className={`${styles.navLink} ${active ? styles.active : ""}`}
        >
          {t(link.label)}
        </Link>
      </li>
    );
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <ul className={styles.navListLeft}>{leftLinks.map(renderLink)}</ul>

        <Link to={`/${lang}`} className={styles.logoWrapper} aria-label="La Fiesta — Home">
          <img src={LOGO_URL} alt="La Fiesta Logo" className={styles.logo} />
        </Link>

        <div className={styles.rightSide}>
          <ul>{rightLinks.map(renderLink)}</ul>

          <LanguageSwitcher className={styles.desktopLanguageSwitcher} />

          <Button
            as="a"
            href={PHONE_HREF}
            variant="primary"
            size="medium"
            icon={FaPhoneAlt}
            className={styles.cta}
          >
            {t("links.cta")}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
