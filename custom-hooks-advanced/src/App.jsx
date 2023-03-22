import { useEffect, useState, Fragment } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async (taskText) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(
				"https://react-practice-5bcdb-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
			);

			if (!response.ok) {
				throw new Error("Request failed!");
			}

			const data = await response.json();

			const loadedTasks = [];

			for (const taskKey in data) {
				loadedTasks.push({ id: taskKey, text: data[taskKey].text });
			}

			setTasks(loadedTasks);
		} catch (err) {
			setError(err.message || "Something went wrong!");
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};

	return (
		<Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
		</Fragment>
	);
}

export default App;