import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
	const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		fetch("https://react-practice-5bcdb-default-rtdb.europe-west1.firebasedatabase.app/cart.json", {
			method: "PUT",
			body: JSON.stringify(cart),
		});
	}, [cart]);

	return (
		<Layout>
			{isCartVisible && totalQuantity > 0 && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
