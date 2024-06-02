import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Sprawdź zapisany język w localStorage
const savedLanguage = localStorage.getItem("language") || "pl";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Welcome: "Welcome to my portfolio",
        // inne tłumaczenia
      },
    },
    pl: {
      translation: {
        Welcome: "Witaj w moim portfolio",
        // inne tłumaczenia
      },
    },
  },
  lng: savedLanguage, // domyślny język
  fallbackLng: "pl",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
