import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
	{ id: 1, title: "Do Homework" },
	{ id: 2, title: "Wash Car" },
	{ id: 3, title: "Complete lesson 1.2 reading" },
];

const TodoList = () => {
	return (
		<ul>
			{todoList.map((todo) => {
				return <TodoListItem item={todo} key={todo.id} />;
			})}
		</ul>
	);
};

export default TodoList;
