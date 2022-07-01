import React from "react";
import {useState} from "react"

const AddToDoForm = () => {

	const handleAddToDo = (event) => {
		event.preventDefault();
		let todoTitle = event.target['title'].value;
		console.log(todoTitle);
		event.target.reset();
	};

	return (
		<form onSubmit={handleAddToDo}>
			<label htmlFor="todoTitle">Title </label>
			<input type="text" id="todoTitle" name="title"/>
			<button type="submit">
				Add
			</button>
		</form>
	);
};
export default AddToDoForm;
