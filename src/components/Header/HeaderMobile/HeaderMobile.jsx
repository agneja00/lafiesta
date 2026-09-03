import styles from "./HeaderMobile.module.scss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { LOGO_URL } from "@/constants/media";
import { PHONE_HREF, INSTAGRAM_URL } from "@/constants/contact";
import Button from "../../Button/Button";
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";
import NavigationLinks from "../../NavigationLinks/NavigationLinks";

const DESKTOP_BREAKPOINT = 1024;

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useParams();
  const { t } = useTranslation();

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
    <header className={styles.header}>
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
            <NavigationLinks showIcons onLinkClick={handleClose} className={styles.navList} />
          </nav>

          <div className={styles.contact}>
            <Button
              as="a"
              href={PHONE_HREF}
              variant="primary"
              icon={FaPhoneAlt}
              className={styles.ctaButton}
            >
              {t("links.cta")}
            </Button>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={styles.socialLink}>
              <FaInstagram fontSize={25} color="#F1707A" />
              <span>Instagram</span>
            </a>
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
