// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
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

const authSlice = createSlice({
	name: "authentication",
	initialState: initialAuthState,
	reducers: {
		login: (state) => {
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.isAuthenticated = false;
		},
	},
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice,
	},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

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
