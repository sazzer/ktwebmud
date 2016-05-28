import 'bootstrap';

import {renderUi} from './ui';
import {setup} from './components/i18n/setup';

setup()
    .then(() => {
        renderUi();
    })
    .catch((err) => {
        console.log('Error configuring i18n', err);
    });
