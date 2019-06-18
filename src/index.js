import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as burgerMenu} from 'redux-burger-menu';

import './index.scss';
import App from './App';

const reducers = {
  // Your other reducers go here
  burgerMenu // Must be mounted at 'burgerMenu'
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
