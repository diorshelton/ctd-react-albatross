import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

const TodoList = ({ todoList, onRemoveTodo }) => {
	return (
		<ul>
			{todoList.map((todo) => {
				return (
					<TodoListItem item={todo} key={todo.id} onRemoveTodo={onRemoveTodo} />
				);
			})}
		</ul>
	);
};

TodoList.propTypes = {
	todoList: PropTypes.array,
	onRemoveTodo: PropTypes.func,
};

export default TodoList;
