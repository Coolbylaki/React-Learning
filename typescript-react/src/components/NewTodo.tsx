import React, { useRef } from "react";

import styles from "./NewTodo.module.css";

type Props = {
	onAddTodo: (text: string) => void;
};

const NewTodo = ({ onAddTodo }: Props) => {
	const todoRef = useRef<HTMLInputElement>(null);

	const formSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoRef.current!.value;

		if (enteredText.trim().length === 0) {
			throw new Error("Invalid Todo!");
		}

		onAddTodo(enteredText);
		todoRef.current!.value = "";
	};

	return (
		<form onSubmit={formSubmitHandler} className={styles.form}>
			<label htmlFor="text">Todo Text</label>
			<input ref={todoRef} type="text" id="text" />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
