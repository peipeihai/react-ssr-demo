import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';

import Routes from './Routes';

const initialState = window.__INITIAL_STATE__;

console.log(window.__INITIAL_STATE__);

const store = createStore(reducers, initialState, applyMiddleware(thunk));

hydrate(
    <Provider store={store}>
        <BrowserRouter> 
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

