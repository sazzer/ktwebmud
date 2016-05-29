import React from 'react';
import {connect} from 'react-redux';
import {SocialLinks} from './socialLinks';

/**
 * Retrieve from the Redux state the social links that are to be enabled
 * @param {Map} state the Redux state
 * @returns {Object} the properties to provide to the Social Links component
 */
function mapStateToProps(state) {
    return {
        links: state.get('socialLinks').toObject()
    };
}

/**
 * Container component used to render the social links
 */
export const SocialLinksContainer = connect(mapStateToProps)(SocialLinks);