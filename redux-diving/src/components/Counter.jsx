import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
	const counter = useSelector((state) => state.value);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {};

	const incrementCounterHandler = () => {
		dispatch({ type: "increment" });
	};

	const decrementCounterHandler = () => {
		dispatch({ type: "decrement" });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div className="counter">
				<button onClick={incrementCounterHandler}>Increment</button>
				<button onClick={decrementCounterHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
