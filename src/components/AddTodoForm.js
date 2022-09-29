import React from "react";
import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";

const AddToDoForm = ({ onAddTodo }) => {
	const [todoTitle, setTodoTitle] = useState("");

	const handleTitleChange = (event) => {
		let newTodoTitle = event.target.value;
		setTodoTitle(newTodoTitle);
	};
	const handleAddToDo = (event) => {
		event.preventDefault();
		onAddTodo({ title: todoTitle, id: Date.now() });
		setTodoTitle([]);
	};

	return (
		<form onSubmit={handleAddToDo}>
			<InputWithLabel todoTitle={todoTitle} onChange={handleTitleChange}>
				Title:
			</InputWithLabel>
			<button type="submit">Add</button>
		</form>
	);
};

AddToDoForm.propTypes = {
	onAddTodo: PropTypes.func,
};

export default AddToDoForm;
