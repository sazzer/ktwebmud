import React from 'react';
import {NavBar, NavBarArea, NavBarLink, NavBarDropdown} from '../components/nav';

export const HeaderBar = () => (
    <NavBar brandKey="header.branding">
        <NavBarArea>
            <NavBarDropdown labelKey="header.encyclopaedia.header">
                <NavBarLink active={false} labelKey="header.login.header" />
                <NavBarLink active={false} labelKey="header.login.header" />
                <NavBarLink active={false} labelKey="header.login.header" />
            </NavBarDropdown>
            <NavBarLink active={false} labelKey="header.login.header" />
        </NavBarArea>
    </NavBar>
);

HeaderBar.propTypes = {};
