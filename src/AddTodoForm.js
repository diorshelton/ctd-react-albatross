import React from "react";
import { useState } from "react";

const AddToDoForm = ({ onAddTodo }) => {
	const [todoTitle, setTodoTitle] = useState('');
	
	const handleTitleChange = (event) => {
		let newTodoTitle = event.target.value;
		setTodoTitle(newTodoTitle)
	}
	const handleAddToDo = (event) => {
		event.preventDefault();
		onAddTodo({title:todoTitle, id:Date.now});
		setTodoTitle([]);
	};

	return (
		<form onSubmit={handleAddToDo}>
			<label htmlFor="todoTitle">Title </label>
			<input type="text" id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}/>
			<button type="submit">
				Add
			</button>
		</form>
	);
};

export default AddToDoForm;
