import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";

function App() {
	const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);

	return (
		<Layout>
			{isCartVisible && totalQuantity > 0 && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
