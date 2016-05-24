import React from 'react';
import i18next from 'i18next';
import {HeaderBar} from './header';
/**
 * The actual main screen of the application
 * @constructor
 */
export const MainScreen = () => (
    <div className="main">
        <HeaderBar />
        <div className="body"></div>
        <div className="footer"></div>
    </div>
);

MainScreen.propTypes = {};
