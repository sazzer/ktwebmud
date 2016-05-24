import React from 'react';

/**
 * React Component representing a set of entries on a navigation bar
 * @constructor
 */
export const NavBarArea = ({children}) => (
    <ul className="nav navbar-nav navbar-right">
        {children}
    </ul>
);

/**
 * Properties that the NavBarArea component supports
 * @type Object
 * @property children {Array} The children to show in this navbar area
 */
NavBarArea.propTypes = {
    children: React.PropTypes.array.isRequired
};
