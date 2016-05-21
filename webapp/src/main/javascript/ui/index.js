import React from 'react';
import ReactDOM from 'react-dom';
import {MainScreen} from './main';
import {CounterContainer} from './counterContainer';
import {Actions} from './actions';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}, applyMiddleware(createLogger({
    duration: true,
    diff: true
})));

export function renderUi() {
    ReactDOM.render(
        (
            <div>
                <MainScreen />
                <Provider store={store}>
                    <div>
                        <CounterContainer />
                        <Actions />
                    </div>
                </Provider>
            </div>
        ), document.getElementById('application')
    );
}