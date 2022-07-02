import React, { useState } from "react";
import TodoList from "./TodoList";
import AddToDoForm from "./AddTodoForm";

function App() {
	const [newTodo, setNewTodo] = useState("");

	return (
		<div>
			<h1>To-Do List</h1>
			<AddToDoForm onAddTodo={setNewTodo} />
			<p>{newTodo}</p>
			<TodoList />
		</div>
	);
}

export default App;
