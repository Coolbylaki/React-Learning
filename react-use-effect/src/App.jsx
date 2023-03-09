import { useState, Fragment, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const isLoggedLocal = localStorage.getItem("isLoggedIn");

	useEffect(() => {
		if (isLoggedLocal === "1") {
			setIsLoggedIn(true);
		}
	}, [isLoggedLocal]);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.setItem("isLoggedIn", "0");
		setIsLoggedIn(false);
	};

	return (
		<Fragment>
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}
				{isLoggedIn && <Home onLogout={logoutHandler} />}
			</main>
		</Fragment>
	);
}

export default App;
