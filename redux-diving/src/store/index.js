// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
	reducer: {
		counter: counterSlice,
		auth: authSlice,
	},
});

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
