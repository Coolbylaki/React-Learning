import styles from "./TodoItem.module.css";

type Props = {
	text: string;
	onRemoveTodo: () => void;
};

const TodoItem = ({ text, onRemoveTodo }: Props) => {
	return (
		<li className={styles.item} onClick={onRemoveTodo}>
			{text}
		</li>
	);
};

export default TodoItem;
