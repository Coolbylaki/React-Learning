import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ProductDetail from "./pages/ProductDetail";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* Older way of using router
const routeDefinitions = createRoutesFromElements(
	<Route>
		<Route path="/" element={<HomePage />} />
		<Route path="/products" element={<ProductPage />} />
	</Route>
);
const router = createBrowserRouter(routeDefinitions); 
*/

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "products", element: <ProductPage /> },
			{ path: "products/:productId", element: <ProductDetail /> },
		],
	},
	,
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
