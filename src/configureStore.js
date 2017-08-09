import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import todos from './reducers';

const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
	middlewares.push(createLogger());
  }

  return createStore(
	  todos, // <- reducers goes here
	  // <- persistent state goes here
	  applyMiddleware(...middlewares) // <- the enhancer
  );
};

export default configureStore;