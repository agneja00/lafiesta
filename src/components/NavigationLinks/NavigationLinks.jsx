import styles from "./NavigationLinks.module.scss";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navLinks } from "@/constants/navLinks";
import { buildTo, isLinkActive } from "@/utils/navigation";

const NavigationLinks = ({ links = navLinks, showIcons = false, onLinkClick, className = "" }) => {
  const { lang } = useParams();
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <ul className={`${styles.list} ${className}`.trim()}>
      {links.map((link) => {
        const Icon = link.icon;
        const active = isLinkActive(link, location, lang);

        return (
          <li key={`${link.to}${link.hash || ""}`}>
            <Link
              to={buildTo(link, lang)}
              className={`${styles.link} ${active ? styles.active : ""}`}
              onClick={onLinkClick}
            >
              {showIcons && Icon && <Icon className={styles.icon} aria-hidden="true" />}

              <span>{t(link.label)}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationLinks;
