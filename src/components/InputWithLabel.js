import React from "react";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import style from "../ImportWithLabel.module.css";

const InputWithLabel = ({ children, todoTitle, onChange }) => {
	const inputRef = useRef(" ");

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<>
			<label htmlFor="todoTitle">{children}</label>
			<input
				className={style.input}
				ref={inputRef}
				placeholder="Enter Task Here"
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
	todoTitle: PropTypes.string,
	onchange: PropTypes.func,
};

export default InputWithLabel;
