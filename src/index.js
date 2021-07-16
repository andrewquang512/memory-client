import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// ? This will be the place to initialize REDUX
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
// ? to create redux, we first have to create store

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);