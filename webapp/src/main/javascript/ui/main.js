import React from 'react';
import i18next from 'i18next';

export const MainScreen = React.createClass({
    render: function() {
        return (
            <div className="main">
                <div className="header">
                    {i18next.t('header')}
                </div>
                <div className="body"></div>
                <div className="footer"></div>
            </div>
        );
    }
});