import React from 'react';
import {NavBarDropdown, NavBarLink} from '../../components/nav';
import {Message} from '../../components/i18n';

/**
 * The Dropdown to display on the header bar for when the user is already logged in
 * @constructor
 */
export const UserDropdown = () => (
    <NavBarDropdown labelKey="header.login.header">
        <NavBarLink active={false}><Message message="header.login.profile" /></NavBarLink>
        <NavBarLink active={false}><Message message="header.login.logout" /></NavBarLink>
    </NavBarDropdown>
);

UserDropdown.propTypes = {};
