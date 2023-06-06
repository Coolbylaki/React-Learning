import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

import { useState } from "react";

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todo: string) => {
		setTodos((prevState) => [...prevState, new Todo(todo)]);
	};

	const removeTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};

	return (
		<>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todos} onRemoveTodo={removeTodoHandler} />
		</>
	);
}

export default App;
