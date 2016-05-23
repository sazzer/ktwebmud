import {createStore, applyMiddleware, compose} from 'redux';
import Immutable from 'immutable';
import createLogger from 'redux-logger';
import {reducer} from './reducers';

const logger = createLogger({
    duration: true,
    diff: true
});

export const store = createStore(reducer,
    Immutable.Map(),
    compose(
        applyMiddleware(logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);