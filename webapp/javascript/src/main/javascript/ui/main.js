import React from 'react';
import {HeaderBar} from './header/header';
import {FooterBar} from './footer/footer';

/**
 * The actual main screen of the application
 * @constructor
 */
export const MainScreen = () => (
    <div className="main">
        <HeaderBar />
        <div className="body"></div>
        <FooterBar />
    </div>
);

MainScreen.propTypes = {};
