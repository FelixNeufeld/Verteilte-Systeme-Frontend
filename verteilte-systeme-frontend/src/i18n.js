import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next)
.init({
    resources: {
        en: {
            translation: {
                username: "Username",
                language: "Language",
                enter: "Enter chat",
                type: "type something...",
                send: "send"
            }
        },
        de: {
            translation:{
                username: "Nutzername",
                language: "Sprache",
                enter: "Beitreten",
                type: "schreibe etwas...",
                send: "senden"
            }
        },
        fr: {
            translation: {
                username: "nom",
                language: "Langue",
                enter: "Rejoindre",
                type: "tape quelque chose...",
                send: "envoyer"
            }
        },
        es: {
            translation: {
                username: "nombre",
                language: "idioma",
                enter: "Unirse",
                type: "escribe algo...",
                send: "enviar"
            }
        },
        ru: {
            translation: {
                username: "имя",
                language: "язык",
                enter: "Присоединиться",
                type: "введите что-либо...",
                send: "отправлять"
            }
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;