import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index.js";
// import { Component } from "react";

const Counter = () => {
	const counter = useSelector((state) => state.counter.value);
	const showCounter = useSelector((state) => state.counter.showCounter);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	const incrementCounterHandler = () => {
		dispatch(counterActions.increment());
	};

	const decrementCounterHandler = () => {
		dispatch(counterActions.decrement());
	};

	const incrementByFiveHandler = () => {
		dispatch(counterActions.increase(5));
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div className="counter">
				<button onClick={incrementCounterHandler}>Increment</button>
				<button onClick={incrementByFiveHandler}>Increase by 5</button>
				<button onClick={decrementCounterHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

// Class based component example
// class Counter extends Component {
// 	incrementHandler() {
// 		this.props.increment();
// 	}

// 	decrementHandler() {
// 		this.props.decrement();
// 	}

// 	toggleCounterHandler() {}

// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={this.incrementHandler.bind(this)}>Increment</button>
// 					<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
// 			</main>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.value,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increment: () => dispatch({ type: "increment" }),
// 		decrement: () => dispatch({ type: "decrement" }),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
