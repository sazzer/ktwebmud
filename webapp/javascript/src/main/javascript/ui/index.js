import React from 'react';
import ReactDOM from 'react-dom';
import {MainScreen} from './main';
import CounterContainer from '../counter';
import {Provider} from 'react-redux';
import store from '../redux';
/**
 * Actually render the UI onto the screen.
 * This will set up the React-Redux provider, and render the UI onto the already-present DOM element '#application'
 */
export function renderUi() {
    ReactDOM.render(
        (
            <Provider store={store}>
                <div>
                    <MainScreen />
                    <CounterContainer />
                </div>
            </Provider>
        ), document.getElementById('application')
    );
}