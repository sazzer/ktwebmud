import React from 'react';
import {Message} from '../i18n/message';

/**
 * React Component representing a navigation header bar
 * @constructor
 */
export const NavBar = ({brandKey, children}) => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-header-toggle" aria-expanded="false">
                    <span className="sr-only">
                        <Message message="ui.toggleNavigation" />
                    </span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <Message message={brandKey} />
                </a>
            </div>

            <div className="test-navbar-child-container">
            {children}
            </div>
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
    children: React.PropTypes.any
};
