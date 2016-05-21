import React from 'react';

export const Counter = ({count}) => (
    <div className="counter">
        Count: {count}
    </div>
);

Counter.propTypes = {
    count: React.PropTypes.number.isRequired
};
