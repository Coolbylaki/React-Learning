type Todos = {
	items: string[];
};

const Todos = ({ items }: Todos) => {
	return (
		<ul>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
};

export default Todos;
