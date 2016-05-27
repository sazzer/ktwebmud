import React from 'react';
import {Message} from '../i18n/message';

/**
 * React Component representing a dropdown on a navigation bar
 * @constructor
 */
export const NavBarDropdown = ({labelKey, children}) => (
    <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <Message message={labelKey} /> <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
            {children}
        </ul>
    </li>
);

/**
 * Properties that the NavBarDropdown component supports
 * @type Object
 * @property labelKey {String} the message key for the dropdown label
 * @property children {Array} The children to show in this dropdown
 */
NavBarDropdown.propTypes = {
    labelKey: React.PropTypes.string.isRequired,
    children: React.PropTypes.any.isRequired
};
