import React from 'react';
import {SocialLink} from '../../components/social/socialLink'
/**
 * The footer bar of the application
 * @constructor
 */
export const FooterBar = () => (
    <footer className="footer">
        <div className="container">
            <p className="text-muted">
                <ul className="list-inline text-center">
                    <li>
                        <SocialLink name="facebook" />
                    </li>
                    <li>
                        <SocialLink name="google" />
                    </li>
                    <li>
                        <SocialLink name="twitter" />
                    </li>
                </ul>
            </p>
        </div>
    </footer>
);

FooterBar.propTypes = {};
