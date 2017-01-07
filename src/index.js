import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/index.js';
import App from './App';

import './index.css';

const store = createStore(reducer);

store.dispatch({
  type: 'GET_CONFIG_SUCCESS',
  payload: {
    "buttons": [
        10,
        38,
        -13,
        -18
    ],
    "bars": [
        62,
        45,
        62
    ],
    "limit": 230
  }
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
