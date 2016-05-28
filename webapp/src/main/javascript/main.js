import 'bootstrap';
import 'whatwg-fetch';

import {renderUi} from './ui';
import {setup} from './components/i18n/setup';
import {store} from './redux/store';
import {loadSocialLinks} from './ui/footer/socialLinksActions';
import {loadSocialLoginLinks} from './ui/header/socialLoginLinksActions';

setup()
    .then(() => {
        store.dispatch(loadSocialLinks());
        store.dispatch(loadSocialLoginLinks());
        renderUi();
    })
    .catch((err) => {
        console.log('Error configuring i18n', err);
    });
