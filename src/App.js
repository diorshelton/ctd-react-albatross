import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./App.module.css";

function App() {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`https://api.airtable.com/v0/apptSjApBiwcQXbSb/Table1`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
			},
		})
			.then((response) => response.json())
			.then((results) => {
				setTodoList(
					results.records.map((record) => ({
						title: record.fields.Title,
						id: record.id,
					}))
				);
				setIsLoading(false);
			});
	}, []);

	useEffect(() => {
		if (!isLoading) {
			let stringifiedData = JSON.stringify(todoList);
			localStorage.setItem("savedTodoList", stringifiedData);
		}
	}, [todoList, isLoading]);

	const removeTodo = (id) => {
		let filteredToDo = todoList.filter((task) => task.id !== id);
		setTodoList(filteredToDo);
	};

	const addTodo = (newTodo) => {
		setTodoList([...todoList, newTodo]);
	};
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								<h1 className={style.heading}>Todo List</h1>
								<hr />
								<AddTodoForm onAddTodo={addTodo} />
								{isLoading ? (
									<p>Loading ...</p>
								) : (
									<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
								)}
							</>
						}
					/>
					<Route path="/new" element={<h1>New Todo List</h1>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
