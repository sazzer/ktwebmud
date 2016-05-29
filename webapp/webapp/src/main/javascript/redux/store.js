import {createStore, applyMiddleware, compose} from 'redux';
import Immutable from 'immutable';
import createLogger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';
import {reducer} from './reducers';
/**
 * The Redux Logger to use
 */
const logger = createLogger({
    duration: true,
    diff: true
});

/**
 * The Redux Store to use.
 * This is configured to use ImmutableJS for the actual data store, and allows the use of Promises for actions.
 */
export const store = createStore(reducer,
    Immutable.Map(),
    compose(
        applyMiddleware(reduxPromise(), logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);