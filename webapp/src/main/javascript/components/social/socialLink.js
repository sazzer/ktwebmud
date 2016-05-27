import React from 'react';
import {Message} from '../i18n/message';

/**
 * React Component representing a link to a social site
 * @constructor
 */
export const SocialLink = ({name}) => (
    <a href="#">
        <span className={['fa', `fa-${name}`].join(' ')}></span> <Message message={`social.names.${name}`} />
    </a>
);

/**
 * Properties that the SocialLink component supports
 * @type Object
 * @property name The name of the social link
 */
SocialLink.propTypes = {
    name: React.PropTypes.string.isRequired
};
