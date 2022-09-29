import React from "react";
import style from "../TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({ item, onRemoveTodo }) => {
	return (
		<>
			<li className={style.listItem}>
				{item.title}
				<button
					className={style.removeButton}
					type="button"
					onClick={() => onRemoveTodo(item.id)}
				>
					Remove
				</button>
			</li>
		</>
	);
};

TodoListItem.propTypes = {
	item: PropTypes.object,
	onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
