// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { value: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		increase: (state, action) => {
			state.value += action.payload;
		},
		toggleCounter: (state) => {
			state.showCounter = !state.showCounter;
		},
	},
});

const store = configureStore({
	reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;

// const counterReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case "increment": {
// 			return { value: state.value + action.amount, showCounter: state.showCounter };
// 		}
// 		case "decrement": {
// 			return {
// 				value: state.value - action.amount,
// 				showCounter: state.showCounter,
// 			};
// 		}
// 		case "toggle": {
// 			return {
// 				value: state.value,
// 				showCounter: !state.showCounter,
// 			};
// 		}
// 		default:
// 			return state;
// 	}
// };

// let store = createStore(counterReducer);

// export default store;
