type Props = {
	text: string;
};

const TodoItem = ({ text }: Props) => {
	return <li>{text}</li>;
};

export default TodoItem;
