import React from 'react';
import ReactDOM from 'react-dom';
import {MainScreen} from './main';

export function renderUi() {
    ReactDOM.render(
        <MainScreen />,
        document.getElementById('application')
    );
}