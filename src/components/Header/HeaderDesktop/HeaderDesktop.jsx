import styles from "./HeaderDesktop.module.scss";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";
import { navLinks } from "@/constants/navLinks";
import { LOGO_URL } from "@/constants/media";
import { PHONE_HREF } from "@/constants/contact";
import Button from "../../Button/Button";
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";
import NavigationLinks from "@/components/NavigationLinks/NavigationLinks";

const HeaderDesktop = () => {
  const { lang } = useParams();
  const { t } = useTranslation();

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <NavigationLinks links={leftLinks} variant="desktopLeft" />

        <Link to={`/${lang}`} className={styles.logoWrapper} aria-label="La Fiesta — Home">
          <img src={LOGO_URL} alt="La Fiesta Logo" className={styles.logo} />
        </Link>

        <div className={styles.rightSide}>
          <NavigationLinks links={rightLinks} variant="desktopRight" />

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
