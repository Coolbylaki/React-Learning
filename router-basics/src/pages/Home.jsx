import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();

	// Navigate programmatically
	const navigateHandler = () => {
		navigate("products");
	};

	return (
		<>
			<h1>My Home Page!</h1>
			<button onClick={navigateHandler}>Navigate</button>
		</>
	);
};

export default HomePage;
