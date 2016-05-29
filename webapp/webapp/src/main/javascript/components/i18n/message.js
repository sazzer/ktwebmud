import React from 'react';
import i18next from 'i18next';

/**
 * React Component representing a translated message
 * @constructor
 */
export const Message = ({message}) => (
    <span>{i18next.t(message)}</span>
);

/**
 * Properties that the Message component supports
 * @type Object
 * @property key {String} the message key to translate
 */
Message.propTypes = {
    message: React.PropTypes.string.isRequired
};
