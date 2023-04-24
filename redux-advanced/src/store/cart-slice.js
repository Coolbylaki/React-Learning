import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalQuantity: 0,
	},
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			state.totalQuantity += 1;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				});
			} else {
				existingItem.quantity += 1;
				existingItem.totalPrice += newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			state.totalQuantity -= 1;

			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.quantity -= 1;
				existingItem.totalPrice -= existingItem.price;
			}
		},
	},
});

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: "pending",
				title: "Sending...",
				message: "Sending cart data!",
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				"https://react-practice-5bcdb-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error("Sending cart data failed.");
			}
		};

		try {
			await sendRequest();

			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "Success...",
					message: "Sending cart successfully!",
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error...",
					message: "Sending cart data failed!",
				})
			);
		}
	};
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
