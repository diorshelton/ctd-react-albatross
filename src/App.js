import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddToDoForm from "./AddTodoForm";

function App() {

	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		console.log(process.env.REACT_APP_AIRTABLE_BASE_ID)
		fetch(
			`https://api.airtable.com/v0/apptSjApBiwcQXbSb/Table1`, {
				method:'GET',
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				},
			}
		)
		.then((response) => response.json())
		.then((results)=> {
			setTodoList(
				results.records.map((record) => ({
					title: record.fields.Title,
					id: record.id,
				}))
			);
			setIsLoading(false);
			console.log(results.records);
		})
	},[])

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
			 <TodoList todoList={todoList} 
			onRemoveTodo={removeTodo}/>}
		</>
	);
}

export default App;