import {combineReducers} from 'redux';
import visibilityFilter from './filter';
import todos from './todos';

export const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;