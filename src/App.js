import React, { useState } from "react";
import TodoList from "./TodoList";
import AddToDoForm from "./AddTodoForm";

const useSemiPersistentState = () => {
	const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')));

	React.useEffect(()=> {
		let stringifiedData = JSON.stringify(todoList);
		localStorage.setItem('savedTodoList', stringifiedData);
	},[todoList])

	return [todoList, setTodoList];
}

function App() {
	const [todoList, setTodoList] = useSemiPersistentState();

	const addTodo = (newTodo) => {
		setTodoList([...todoList, newTodo]);
	}
	return (
		<>
			<h1>To-Do List</h1>
			<AddToDoForm onAddTodo={addTodo} />
			<TodoList todoList={todoList}/>
		</>
	);
}

export default App;