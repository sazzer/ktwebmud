import React from 'react';
import i18next from 'i18next';

/**
 * React Component representing a link to a social site
 * @constructor
 */
export const SocialLink = ({name}) => (
    <a href="#">
        <span className={['fa', `fa-${name}`].join(' ')}></span> {i18next.t(`social.names.${name}`)}
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
