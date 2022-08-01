import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
	console.log(todoList)
	return (
		<ul>
			{todoList.map((todo) => {
				return <TodoListItem item={todo} key={todo.id} />;
			})}
		</ul>
	);
};

export default TodoList;