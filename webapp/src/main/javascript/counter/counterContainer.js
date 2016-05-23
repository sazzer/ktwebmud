import React from 'react';
import {connect} from 'react-redux';
import {Counter} from './counter';

function mapStateToProps(state) {
    return {
        count: state.get('count')
    };
}

export const CounterContainer = connect(mapStateToProps)(Counter);