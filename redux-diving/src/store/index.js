import { createStore } from "redux";

const initialState = { value: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "increment": {
			return { value: state.value + action.amount, showCounter: state.showCounter };
		}
		case "decrement": {
			return {
				value: state.value - action.amount,
				showCounter: state.showCounter
			};
		}
		case "toggle": {
			return {
				value: state.value,
				showCounter: !state.showCounter
			}
		}
		default:
			return state;
	}
};

let store = createStore(counterReducer);

export default store;
