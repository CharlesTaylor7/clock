import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { App } from './components/app/App'
import * as serviceWorker from './serviceWorker'
import rootReducer from './reducers'
import fetchTimeSaga from './sagas/fetchTime'
import clockTickSaga from './sagas/clockTick'

import './index.css'

const composeEnhancers = composeWithDevTools({});

const initialState = {
  time: new Date(2000, 1, 1, 0, 0)
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ),
);

sagaMiddleware.run(fetchTimeSaga);
sagaMiddleware.run(clockTickSaga);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
