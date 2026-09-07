import { useEffect } from "react";
import { Outlet, useParams, Navigate } from "react-router";
import { useTranslation } from "react-i18next";

const supportedLanguages = ["en", "es"];

export function LanguageLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  const isValidLanguage =
    lang && supportedLanguages.includes(lang);

  useEffect(() => {
    if (isValidLanguage && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, isValidLanguage, i18n]);

  if (!isValidLanguage) {
    return <Navigate to="/en" replace />;
  }

  return <Outlet />;
}
