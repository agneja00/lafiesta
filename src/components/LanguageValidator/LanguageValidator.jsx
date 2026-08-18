import { Navigate, Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "../../constants/routes";

const LanguageValidator = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (SUPPORTED_LANGUAGES.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
  }

  return <Outlet />;
};

export default LanguageValidator;
