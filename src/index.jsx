import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
	ConnectedRouter,
	routerMiddleware,
} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createReducer from './reducer';

import(/* webpackChunkName: "bootstrap" */ 'bootstrap');
import(/* webpackChunkName: "fontawesome" */ '@fortawesome/fontawesome-free');
import(/* webpackChunkName: "style" */ './style');

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable global-require */
  const MockFetch = require('lib/MockFetch');
  const mocks = require('mocks/responses');
  /* eslint-enable global-require */
  Object.values(mocks).forEach(mock => MockFetch.addMock(mock));
  MockFetch.startMocking();
}

const history = createBrowserHistory();

const store = createStore(
  createReducer(history),
  composeWithDevTools({
    trace: true, 
    traceLimit: 25 
  })(applyMiddleware(thunk, routerMiddleware(history)))
);

import(/* webpackChunkName: "main" */ './app').then(App => {
  const AppComponent = App.default;
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppComponent store={store} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
  );
});
