import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import TodoList from './TodoList';
import * as actions from "../actions";
import {getVisibleTodos, getIsFetching} from '../reducers';

class VisibleTodoList extends Component {

  componentDidMount() {
	this.fetchData();
  };

  componentDidUpdate(prevProps) {
	if (this.props.filter !== prevProps.filter) {
	  this.fetchData();
	}
  }

  fetchData() {
	const {filter, fetchTodos, requestTodos} = this.props;
	requestTodos(filter);
	fetchTodos(filter);
  }

  render() {
	const {isFetching, toggleTodo, todos} = this.props;

	if (isFetching && !todos.length) {
	  return <p>Loading...</p>;
	}

	return (
		<TodoList
			todos={todos}
			onTodoClick={toggleTodo}
		/>
	);
  }
}


const mapStateToProps = (state, {params}) => {
  const filter = params.filter || 'all';
  return {
	isFetching: getIsFetching(state, filter),
	todos: getVisibleTodos(state, filter),
	filter,
  }
};

VisibleTodoList = withRouter(connect(
	mapStateToProps,
	actions
)(VisibleTodoList));

export default VisibleTodoList;