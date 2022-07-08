import React from "react";

const AddToDoForm = (props) => {

	const handleAddToDo = (event) => {
		event.preventDefault();
		let todoTitle = event.target.title.value;
		props.onAddTodo(todoTitle);
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
