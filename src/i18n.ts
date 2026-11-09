import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homeEn from "@/i18n/home/en.json";
import homeEs from "@/i18n/home/es.json";

import servicesEn from "@/i18n/services/en.json";
import servicesEs from "@/i18n/services/es.json";

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",

    supportedLngs: ["en", "es"],

    resources: {
      en: {
        home: homeEn,
        services: servicesEn,
      },
      es: {
        home: homeEs,
        services: servicesEs,
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
