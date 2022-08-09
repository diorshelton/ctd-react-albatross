import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddToDoForm from "./AddTodoForm";

function App() {

	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(()=> {
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({data:{todoList:JSON.parse(localStorage.getItem('savedTodoList'))}})
			}, 2000)
		})
		.then((result) => { 
			setTodoList(result.data.todoList)
			setIsLoading(false);
		})
	})

	useEffect(()=> {
		if(!isLoading) {
			let stringifiedData = JSON.stringify(todoList);
			localStorage.setItem('savedTodoList', stringifiedData);
		}
		
	},[todoList, isLoading])

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
			{ isLoading ? <p>Loading...</p> :
			<TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
		</>
	);
}

export default App;