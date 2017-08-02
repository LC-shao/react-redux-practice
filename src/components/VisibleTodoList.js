import React from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';
import {toggleTodo} from "../actions/index";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
	case 'SHOW_ALL':
	  return todos;
	case 'SHOW_COMPLETED':
	  return todos.filter(t => t.completed);
	case 'SHOW_ACTIVE':
	  return todos.filter(t => !t.completed);
  }
};

const mapStateToTodoListProps = (state, ownProps) => ({
  todos: getVisibleTodos(
	  state.todos,
	  state.visibilityFilter
  )
});

const mapDispatchToTodoListProps = (dispatch, ownProps) => ({
  onTodoClick: id => dispatch(toggleTodo(id))
});

const VisibleTodoList = connect(
	mapStateToTodoListProps,
	mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;