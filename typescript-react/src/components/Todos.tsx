import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import styles from "./Todos.module.css";

type Props = {
	items: Todo[];
	onRemoveTodo: (id: string) => void;
};

const Todos = ({ items, onRemoveTodo }: Props) => {
	return (
		<ul className={styles.todos}>
			{items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					onRemoveTodo={onRemoveTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
