import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { fa } from './fa'

const resources = {
    fa
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "fa",
        fallbackNS: "global",
        debug: process.env.NODE_ENV !== 'production',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;