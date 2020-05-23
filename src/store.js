import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import * as History from 'history';

import rootReducer from './reducers';

export const history = History.createBrowserHistory();

const initialState = {};

const enhancers = [];

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);
