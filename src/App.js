import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddToDoForm from "./AddTodoForm";

const savedList = JSON.parse(localStorage.getItem('savedTodoList'))?JSON.parse(localStorage.getItem('savedTodoList')):[];
	
function App() {

	const [todoList, setTodoList] = useState([...savedList]);

	useEffect(()=> {
		let stringifiedData = JSON.stringify(todoList);
		localStorage.setItem('savedTodoList', stringifiedData);
	},[todoList])

	const removeTodo = (id) => {
		let filteredToDo = todoList.filter( task => task.id !== id);
		setTodoList(filteredToDo);
	}

	const addTodo = (newTodo) => {
		setTodoList([...todoList, newTodo]);
	}
	return (
		<>
			<h1>To-Do List</h1>
			<AddToDoForm onAddTodo={addTodo} />
			<TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
		</>
	);
}

export default App;