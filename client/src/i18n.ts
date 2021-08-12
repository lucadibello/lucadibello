import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
i18n
  .use(detector) // Load language detector
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .init({
    debug: true,
    nsSeparator: false,
    fallbackLng: "en", // use en if detected lng is not available
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: "locales/{{lng}}/{{ns}}.json"
    },
    react: { 
      useSuspense: false // this will do the magic
    }
  });

  export default i18n;