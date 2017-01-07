import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers/index.js';
import App from './containers/App';
import load from './actions/config.js';

import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(load());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
