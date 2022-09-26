import React from "react";
import style from "./TodoListItem.module.css";

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

export default TodoListItem;
