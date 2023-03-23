import { useEffect, useState, Fragment } from "react";
import useHttp from "./hooks/fetch-task";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
	const [tasks, setTasks] = useState([]);

	const transformTasks = (tasksObject) => {
		const loadedTasks = [];

		for (const taskKey in tasksObject) {
			loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
		}

		setTasks(loadedTasks);
	};

	const {
		isLoading,
		error,
		sendRequest: fetchTasks,
	} = useHttp(
		{
			url: "https://react-practice-5bcdb-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
		},
		transformTasks
	);

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
