import React from 'react';
import {connect} from 'react-redux';
import {SocialLoginLinks} from './socialLoginLinks';

/**
 * Retrieve from the Redux state the social login links that are to be enabled
 * @param {Map} state the Redux state
 * @returns {Object} the properties to provide to the Social Login Links component
 */
function mapStateToProps(state) {
    return {
        links: {
            facebook: 'http://www.facebook.com',
            google: 'http://www.google.com',
            twitter: 'http://www.twitter.com'
        }
    };
}

/**
 * Container component used to render the social links
 */
export const SocialLoginLinksContainer = connect(mapStateToProps)(SocialLoginLinks);