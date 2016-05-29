import React from 'react';
import {NavBar, NavBarArea, NavBarLink, NavBarDropdown} from '../../components/nav';
import {Message} from '../../components/i18n';
import {UserLink} from './userLink';

/**
 * The header bar of the application
 * @constructor
 */
export const HeaderBar = () => (
    <NavBar brandKey="header.branding">
        <NavBarArea>
            <NavBarDropdown labelKey="header.encyclopaedia.header">
                <NavBarLink active={false}><Message message="header.login.header" /></NavBarLink>
                <NavBarLink active={false}><Message message="header.login.header" /></NavBarLink>
                <NavBarLink active={false}><Message message="header.login.header" /></NavBarLink>
            </NavBarDropdown>
            <UserLink />
        </NavBarArea>
    </NavBar>
);

HeaderBar.propTypes = {};
