import Todo from "../models/todo";

type Todos = {
	items: Todo[];
};

const Todos = ({ items }: Todos) => {
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	);
};

export default Todos;
