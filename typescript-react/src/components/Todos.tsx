import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type Props = {
	items: Todo[];
};

const Todos = ({ items }: Props) => {
	return (
		<ul>
			{items.map((item) => (
				<TodoItem key={item.id} text={item.text} />
			))}
		</ul>
	);
};

export default Todos;
