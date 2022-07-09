import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
	return (
		<ul>
			{props.todoList.map((todo) => {
				return <TodoListItem item={todo} key={todo.id} />;
			})}
		</ul>
	);
};

export default TodoList;
