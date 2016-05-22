import React from 'react';
import ReactDOM from 'react-dom';
import {MainScreen} from './main';
import {CounterContainer} from './counterContainer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger({
    duration: true,
    diff: true
});

const reducer =  (state = {count: 0}, action) => {
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
};

const store = createStore(reducer,
    compose(
        applyMiddleware(logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export function renderUi() {
    ReactDOM.render(
        (
            <div>
                <MainScreen />
                <Provider store={store}>
                    <div>
                        <CounterContainer />
                    </div>
                </Provider>
            </div>
        ), document.getElementById('application')
    );
}