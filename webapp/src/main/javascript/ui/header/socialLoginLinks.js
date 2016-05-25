import React from 'react';
import {SocialLoginButton} from '../../components/social/socialLoginButton';

/**
 * The Dropdown to display the list of social login buttons that we support
 * @constructor
 */
export const SocialLoginLinks = ({links}) => {
    const linkElements = Object.keys(links)
        .map((link) => <SocialLoginButton name={link} />);

    return <div>{linkElements}</div>;
};

SocialLoginLinks.propTypes = {
    links: React.PropTypes.object.isRequired
};
