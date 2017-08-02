import {createStore} from 'redux';
import todoApp from './reducers/index';
import {loadState, saveState} from './localStorage';
import {throttle} from "lodash/function";

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
	  todoApp,
	  persistedState
  );

  store.subscribe(throttle(() => {
	saveState({
	  todos: store.getState().todos
	});
  }, 1000));

  return store;
};

export default configureStore;