import React from 'react';
import i18next from 'i18next';

/**
 * React Component representing a link on a navigation bar
 * @constructor
 */
export const NavBarLink = ({active, labelKey}) => (
    <li className={active ? 'active' : ''}>
        <a href="#">
            {i18next.t(labelKey)}
            {active ? <span className="sr-only">(current)</span> : ''}
        </a>
    </li>
);

/**
 * Properties that the NavBarLink component supports
 * @type Object
 * @property active {Boolean} Whether this is the currently active link
 * @property labelKey {String} Message key for the label of the link
 */
NavBarLink.propTypes = {
    active: React.PropTypes.bool,
    labelKey: React.PropTypes.string.isRequired
};
