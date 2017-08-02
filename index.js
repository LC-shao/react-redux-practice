import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import todoApp from './src/reducers';
import TodoApp from './src/components/TodoApp';

ReactDOM.render(
	<Provider store={createStore(todoApp)}>
	  <TodoApp/>
	</Provider>, document.getElementById('root')
);