import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
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
				// const tasks = results.records.sort((xTask, yTask) => {
				// 	if (xTask.fields.Title < yTask.fields.Title) {
				// 		return -1;
				// 	} else if (xTask.fields.Title === yTask.fields.Title) {
				// 		return 0;
				// 	} else {
				// 		return 1;
				// 	}
				// });

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
