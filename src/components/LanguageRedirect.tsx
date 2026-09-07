import { useEffect } from "react";
import { useNavigate } from "react-router";

export function LanguageRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const browserLanguage = navigator.language
      .split("-")[0]
      .toLowerCase();

    const language =
      browserLanguage === "es" ? "es" : "en";

    navigate(`/${language}`, { replace: true });
  }, [navigate]);

  return null;
}
