import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Modal from 'react-modal'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {reducers}  from './reducers';

Modal.setAppElement('#root')

// ReactDOM.render(<App />, document.getElementById('root'))
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
