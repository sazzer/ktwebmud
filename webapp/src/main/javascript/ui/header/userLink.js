import React from 'react';
import {connect} from 'react-redux';
import {LoginDropdown} from './loginDropdown';
import {UserDropdown} from './userDropdown';

/**
 * Retrieve the user that is currently logged in from the Redux state
 * @param {Map} state the Redux state
 * @returns {Object} the state that the UserLink component needs
 */
function mapStateToProps(state) {
    return {
        user: state.get('activeUser'),
        isLoggedIn: state.has('activeUser')
    };
}


/**
 * The header bar link that either gives a Login dropdown or a User Profile dropdown as appropriate
 * @constructor
 */
export const UserLink = connect(mapStateToProps)(({user, isLoggedIn}) => {
    let result;
    if (isLoggedIn) {
        result = <UserDropdown />;
    } else {
        result = <LoginDropdown />;
    }
    return result;
});