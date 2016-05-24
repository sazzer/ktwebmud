import React from 'react';
import i18next from 'i18next';

/**
 * React Component representing a navigation header bar
 * @constructor
 */
export const NavBar = ({brandKey, children}) => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-header-toggle" aria-expanded="false">
                    <span className="sr-only">{i18next.t('ui.toggleNavigation')}</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">{i18next.t(brandKey)}</a>
            </div>

            {children}
        </div>
    </nav>
);
/**
 * Properties that the NavBar component supports
 * @type Object
 * @property brandKey {String} the message key to use for the branding
 * @property children {Array} The children to show in the navbar
 */
NavBar.propTypes = {
    brandKey: React.PropTypes.string.isRequired,
    children: React.PropTypes.array.isRequired
};
