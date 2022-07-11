import React, { useState } from "react";
import TodoList from "./TodoList";
import AddToDoForm from "./AddTodoForm";

function App() {
	const [todoList, setTodoList] = useState([]);
	const addTodo = (newTodo) =>{
		setTodoList([...todoList, newTodo]);
	}
	return (
		<div>
			<h1>To-Do List</h1>
			<AddToDoForm onAddTodo={addTodo} />
			<TodoList todoList={todoList}/>
		</div>
	);
}

export default App;
