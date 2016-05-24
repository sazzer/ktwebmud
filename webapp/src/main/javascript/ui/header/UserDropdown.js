import React from 'react';
import {NavBarDropdown, NavBarLink} from '../../components/nav';

/**
 * The Dropdown to display on the header bar for when the user is already logged in
 * @constructor
 */
export const UserDropdown = () => (
    <NavBarDropdown labelKey="header.login.header">
        <NavBarLink active={false} labelKey="header.login.profile" />
        <NavBarLink active={false} labelKey="header.login.logout" />
    </NavBarDropdown>
);

UserDropdown.propTypes = {};
