import React from 'react';
import {Actions} from './actions';

export const Counter = ({count}) => (
    <div className="counter">
        Count: <span className="count">{count}</span>
        <Actions />
    </div>
);

Counter.propTypes = {
    count: React.PropTypes.number.isRequired
};
