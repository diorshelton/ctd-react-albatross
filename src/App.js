import React, { useState } from "react";
import TodoList from "./TodoList";
import AddToDoForm from "./AddTodoForm";

function App() {
	return (
		<div>
			<h1>To-Do List</h1>
			<AddToDoForm />
			<TodoList />
		</div>
	);
}

export default App;