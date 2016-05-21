import React from 'react';
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}

export const Actions = connect(null, mapDispatchToProps)(({increment, decrement}) => (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
));
