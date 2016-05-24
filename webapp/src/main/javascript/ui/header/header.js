import React from 'react';
import {NavBar, NavBarArea, NavBarLink, NavBarDropdown} from '../../components/nav';
import {UserLink} from './userLink';

/**
 * The header bar of the application
 * @constructor
 */
export const HeaderBar = () => (
    <NavBar brandKey="header.branding">
        <NavBarArea>
            <NavBarDropdown labelKey="header.encyclopaedia.header">
                <NavBarLink active={false} labelKey="header.login.header" />
                <NavBarLink active={false} labelKey="header.login.header" />
                <NavBarLink active={false} labelKey="header.login.header" />
            </NavBarDropdown>
            <UserLink />
        </NavBarArea>
    </NavBar>
);

HeaderBar.propTypes = {};
