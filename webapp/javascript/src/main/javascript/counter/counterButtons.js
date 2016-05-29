import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from './actions';

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}

export const Actions = connect(null, mapDispatchToProps)(({increment, decrement}) => (
    <div>
        <button className="increment" onClick={increment}>Increment</button>
        <button className="decrement" onClick={decrement}>Decrement</button>
    </div>
));
