import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import messageReducer from './greetings/greetings';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  message: messageReducer,
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
