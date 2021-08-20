import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleWare from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { invoice } from './reducers';
import { InvoiceSate } from './reducers/invoice.reducer';

export interface IRootState {
  invoice: InvoiceSate;
}

const reducers = combineReducers({
  invoice,
});

export const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunkMiddleWare, promiseMiddleware))
    : compose(applyMiddleware(thunkMiddleWare, promiseMiddleware))
);
