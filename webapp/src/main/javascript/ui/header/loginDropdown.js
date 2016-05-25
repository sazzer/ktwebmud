import React from 'react';
import {NavBarDropdown} from '../../components/nav';
import {SocialLoginButton} from '../../components/social/socialLoginButton';

/**
 * The Dropdown to display on the header bar for when the user is not logged in yet
 * @constructor
 */
export const LoginDropdown = () => (
    <NavBarDropdown labelKey="header.login.header">
        <SocialLoginButton name="facebook" />
        <SocialLoginButton name="google" />
        <SocialLoginButton name="twitter" />
    </NavBarDropdown>
);

LoginDropdown.propTypes = {};
