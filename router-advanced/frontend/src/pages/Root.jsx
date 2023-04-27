import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
	// Check do we have something going on
	// const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main>
				{/* {navigation.state === "loading" && <p>Loading...</p>} */}
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
