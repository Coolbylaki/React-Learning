import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
	const dispatch = useDispatch();

	const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const notification = useSelector((state) => state.ui.notification);
	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}

		dispatch(sendCartData(cart));
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
