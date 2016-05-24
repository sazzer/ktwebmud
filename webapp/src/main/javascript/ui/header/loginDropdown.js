import React from 'react';
import {NavBarDropdown, NavBarLink} from '../../components/nav';

/**
 * The Dropdown to display on the header bar for when the user is not logged in yet
 * @constructor
 */
export const LoginDropdown = () => (
    <NavBarDropdown labelKey="header.login.header">
        <NavBarLink active={false} labelKey="header.login.profile" />
    </NavBarDropdown>
);

LoginDropdown.propTypes = {};
