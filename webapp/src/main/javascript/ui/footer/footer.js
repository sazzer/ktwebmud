import React from 'react';
import {SocialLinksContainer} from './socialLinksContainer'
/**
 * The footer bar of the application
 * @constructor
 */
export const FooterBar = () => (
    <footer className="footer">
        <div className="container">
            <div className="text-muted socialLinks">
                <SocialLinksContainer />
            </div>
        </div>
    </footer>
);

FooterBar.propTypes = {};
