import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onRemoveTodo }) => {
	return (
		<ul>
			{todoList.map((todo) => {
				return (
					<TodoListItem 
						item={todo} 
						key={todo.id} 
						onRemoveTodo={onRemoveTodo}
					/>
				);
			})}
		</ul>
	);
};

export default TodoList;
