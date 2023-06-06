import styles from "./TodoItem.module.css";

type Props = {
	text: string;
};

const TodoItem = ({ text }: Props) => {
	return <li className={styles.item}>{text}</li>;
};

export default TodoItem;
