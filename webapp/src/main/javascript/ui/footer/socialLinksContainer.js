import React from 'react';
import {connect} from 'react-redux';
import {SocialLinks} from './socialLinks';

/**
 * Retrieve from the Redux state the social links that are to be enabled
 * @param state the Redux state
 * @returns the properties to provide to the Social Links component
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
export const SocialLinksContainer = connect(mapStateToProps)(SocialLinks);