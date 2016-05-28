import 'bootstrap';

import {renderUi} from './ui';
import {setup} from './components/i18n/setup';
import {store} from './redux/store';
import {loadSocialLinks} from './ui/footer/socialLinksActions';

setup()
    .then(() => {
        store.dispatch(loadSocialLinks());
        renderUi();
    })
    .catch((err) => {
        console.log('Error configuring i18n', err);
    });
