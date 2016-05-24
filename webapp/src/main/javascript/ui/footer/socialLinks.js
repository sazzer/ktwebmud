import React from 'react';
import {SocialLink} from '../../components/social/socialLink'
/**
 * The Social Links that go in the footer bar of the application
 * @constructor
 */
export const SocialLinks = ({links}) => {
    const linkElements = Object.keys(links)
        .map((link) => <li><SocialLink name={link} /></li>);
    
    const result = <ul className="list-inline text-center">
        {linkElements}
    </ul>
    
    return result;
};

SocialLinks.propTypes = {
    links: React.PropTypes.object.isRequired
};
