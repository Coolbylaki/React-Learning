import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { Component } from "react";

const Counter = () => {
	const counter = useSelector((state) => state.value);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {};

	const incrementCounterHandler = () => {
		dispatch({ type: "increment", payload: 1 });
	};

	const decrementCounterHandler = () => {
		dispatch({ type: "decrement", payload: 1 });
	};

	const incrementByFiveHandler = () => {
		dispatch({ type: "increment", payload: 5 });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
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
