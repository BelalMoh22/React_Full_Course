import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "../public/locales/ar/translation.json";
import en from "../public/locales/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en },
  },
  lng: "ar",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

// language codes : https://www.loc.gov/standards/iso639-2/php/code_list.php
