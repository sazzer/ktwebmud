import React from 'react';
import {Message} from '../i18n/message';
/**
 * React Component representing a login button via a social site
 * @constructor
 */
export const SocialLoginButton = ({name}) => (
    <li>
        <a className={['btn', 'btn-block', 'btn-social', `btn-${name}`].join(' ')}>
            <span className={['fa', `fa-${name}`].join(' ')}></span>
            <Message message={`social.login.${name}`} />
        </a>
    </li>
);

/**
 * Properties that the SocialLink component supports
 * @type Object
 * @property name The name of the social link
 */
SocialLoginButton.propTypes = {
    name: React.PropTypes.string.isRequired
};
