import { createStore } from "redux";

const counterReducer = (state = { value: 0 }, action) => {
	switch (action.type) {
		case "increment": {
			return { value: state.value + action.payload };
		}
		case "decrement": {
			return {
				value: state.value - action.payload,
			};
		}
		default:
			return state;
	}
};

let store = createStore(counterReducer);

export default store;
