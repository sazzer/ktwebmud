import React from 'react';
import ReactDOM from 'react-dom';
import {MainScreen} from './main';
import CounterContainer from '../counter';
import {Provider} from 'react-redux';
import store from '../redux';

export function renderUi() {
    ReactDOM.render(
        (
            <div>
                <MainScreen />
                <Provider store={store}>
                    <CounterContainer />
                </Provider>
            </div>
        ), document.getElementById('application')
    );
}