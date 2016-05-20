import {renderUi} from './ui';
import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import LngDetector from 'i18next-browser-languagedetector';

i18next
    .use(LngDetector)
    .use(XHR)
    .init({
        backend: {
            loadPath: '/static/locales/{{ns}}/{{lng}}.json'
        },
        detection: {
            order: [
                'querystring',
                'cookie',
                'localStorage',
                'navigator'
            ],
            lookupQuerystring: 'lng',
            lookupCookie: 'lng',
            lookupLocalStorage: 'lng',

            caches: ['localStorage', 'cookie']
        },
        debug: true,
        ns: 'webmud',
        defaultNS: 'webmud'
}, (err, t) => {
    renderUi();
});
