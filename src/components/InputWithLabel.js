import React from "react";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({ children, todoTitle, onChange }) => {
	const inputRef = useRef(" ");

	useEffect(() => {
		inputRef.current.focus();
	});
	return (
		<>
			<label htmlFor="todoTitle">{children}</label>
			<input
				ref={inputRef}
				type="text"
				id="todoTitle"
				name="title"
				value={todoTitle}
				onChange={onChange}
			/>
		</>
	);
};

InputWithLabel.propTypes = {
	children: PropTypes.string,
	todoTitle: PropTypes.string,
	onchange: PropTypes.func,
};

export default InputWithLabel;
