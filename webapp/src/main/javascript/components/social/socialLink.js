import React from 'react';
import {Message} from '../i18n/message';

/**
 * React Component representing a link to a social site
 * @constructor
 */
export const SocialLink = ({name, url}) => (
    <a href={url} target="_blank" className={`social-link-${name}`}>
        <span className={['fa', `fa-${name}`].join(' ')}></span> <Message message={`social.names.${name}`} />
    </a>
);

/**
 * Properties that the SocialLink component supports
 * @type Object
 * @property name The name of the social link
 * @property url The URL of the social link
 */
SocialLink.propTypes = {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
};
