import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import TodoList from './TodoList';
import {toggleTodo} from "../actions/index";
import {getVisibleTodos} from '../reducers';

const mapStateToProps = (state, {params}) => ({
  todos: getVisibleTodos(
	  state,
	  params.filter || 'all'
  )
});

const VisibleTodoList = withRouter(connect(
	mapStateToProps,
	{onTodoClick: toggleTodo}
)(TodoList));

export default VisibleTodoList;