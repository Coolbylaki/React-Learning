import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";

function App() {
	const dispatch = useDispatch();

	const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const notification = useSelector((state) => state.ui.notification);
	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		const sendCartData = async () => {
			dispatch(
				uiActions.showNotification({
					status: "pending",
					title: "Sending...",
					message: "Sending cart data!",
				})
			);
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

			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "Success...",
					message: "Sending cart successfully!",
				})
			);
		};

		sendCartData().catch(() => {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error...",
					message: "Sending cart data failed!",
				})
			);
		});
	}, [cart, dispatch]);

	return (
		<Fragment>
			{notification && (
				<Notification status={notification.status} title={notification.title} message={notification.message} />
			)}
			<Layout>
				{isCartVisible && totalQuantity > 0 && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
