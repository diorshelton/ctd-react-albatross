import React from "react";
import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";
import style from "../AddTodoForm.module.css";

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
		<form onSubmit={handleAddToDo} className={style.form}>
			<InputWithLabel todoTitle={todoTitle} onChange={handleTitleChange}>
				<h2>Title:</h2>
			</InputWithLabel>
			<button type="submit">Add</button>
		</form>
	);
};

AddToDoForm.propTypes = {
	onAddTodo: PropTypes.func,
};

export default AddToDoForm;
