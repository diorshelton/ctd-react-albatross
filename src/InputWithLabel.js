import React from "react";

const InputWithLabel = ({ children, value, onChange }) => {

	const inputRef = React.useRef(" ");

	React.useEffect = (() => {
		inputRef.current.focus();
	}, []);
	return (
		<>
			<label htmlFor="todoTitle">{children}</label>
			<input
				ref={inputRef}
				type="text"
				id="todoTitle"
				name="title"
				value={value}
				onChange={onChange}
			/>
		</>
	);
};

export default InputWithLabel;
