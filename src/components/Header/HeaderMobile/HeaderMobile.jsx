import styles from "./HeaderMobile.module.scss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes, FaInstagram, FaFacebookF } from "react-icons/fa";
import { LOGO_URL } from "@/constants/media";
import { INSTAGRAM_URL, FACEBOOK_URL } from "@/constants/contact";
import ContactActions from "@/components/ContactActions/ContactActions";
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";
import NavigationLinks from "../../NavigationLinks/NavigationLinks";
import useScrolled from "@/hooks/useScrolled";

const DESKTOP_BREAKPOINT = 1024;

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useParams();
  const { t } = useTranslation();

  const isScrolled = useScrolled(60);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.bar}>
        <button
          type="button"
          className={styles.iconButton}
          onClick={toggleMenu}
          aria-label={
            menuOpen ? t("menu.close", "Uždaryti meniu") : t("menu.open", "Atidaryti meniu")
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes fontSize={30} /> : <FaBars fontSize={30} />}
        </button>

        <Link to={`/${lang}`} className={styles.logoWrapper} onClick={handleClose}>
          <img src={LOGO_URL} alt="La Fiesta Logo" className={styles.logo} />
        </Link>
      </div>

      {menuOpen && (
        <div className={styles.menu}>
          <nav aria-label="Main navigation">
            <NavigationLinks variant="mobile" showIcons onLinkClick={handleClose} />
          </nav>

          <div className={styles.contact}>
            <ContactActions variant="menu" />

            <div className={styles.socials}>
              <span className={styles.socialsLabel}>{t("menu.followUs")}</span>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <FaInstagram aria-hidden="true" />
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <FaFacebookF aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className={styles.language}>
            <LanguageSwitcher onChange={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderMobile;
