import styles from "./LanguageSwitcher.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { SUPPORTED_LANGUAGES } from "../../constants/routes";
import Button from "../Button/Button";

const LanguageSwitcher = ({ className = "" }) => {
  const navigate = useNavigate();
  const { lang } = useParams();

  const changeLanguage = (code) => {
    if (code === lang) return;

    navigate(window.location.pathname.replace(`/${lang}`, `/${code}`));
  };

  return (
    <div className={`${styles.switcher} ${className}`.trim()}>
      {SUPPORTED_LANGUAGES.map((code) => {
        const isActive = lang === code;

        return (
          <Button
            key={code}
            type="button"
            variant="language"
            size="compact"
            className={isActive ? styles.active : ""}
            onClick={() => changeLanguage(code)}
            aria-pressed={isActive}
          >
            {code.toUpperCase()}
          </Button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
