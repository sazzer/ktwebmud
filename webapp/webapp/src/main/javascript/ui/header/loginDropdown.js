import React from 'react';
import {NavBarDropdown} from '../../components/nav';
import {SocialLoginLinksContainer} from './socialLoginLinksContainer';

/**
 * The Dropdown to display on the header bar for when the user is not logged in yet
 * @constructor
 */
export const LoginDropdown = () => (
    <NavBarDropdown labelKey="header.login.header">
        <SocialLoginLinksContainer />
    </NavBarDropdown>
);

LoginDropdown.propTypes = {};
