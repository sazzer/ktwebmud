import React from 'react';

/**
 * React Component representing a link on a navigation bar
 * @constructor
 */
export const NavBarLink = ({active, children}) => (
    <li className={active ? 'active' : ''}>
        <a href="#">
            {children}
            {active ? <span className="sr-only">(current)</span> : ''}
        </a>
    </li>
);

/**
 * Properties that the NavBarLink component supports
 * @type Object
 * @property active {Boolean} Whether this is the currently active link
 * @property children {Any} Content of the link
 */
NavBarLink.propTypes = {
    active: React.PropTypes.bool,
    children: React.PropTypes.any.isRequired
};
