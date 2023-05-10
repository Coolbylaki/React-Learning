import { Outlet, useNavigation, useLoaderData, useSubmit } from "react-router-dom";
import { getTokenDuration } from "../util/auth";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";

function RootLayout() {
	// const navigation = useNavigation();
	const submit = useSubmit();
	const token = useLoaderData();

	useEffect(() => {
		if (!token) {
			return;
		}

		if (token === "EXPIRED") {
			submit(null, {
				action: "/logout",
			});
			return;
		}

		const tokenDuration = getTokenDuration();
		console.log(tokenDuration);

		setTimeout(() => {
			submit(null, {
				action: "/logout",
			});
		}, tokenDuration);
	}, [token, submit]);

	return (
		<>
			<MainNavigation />
			<main>
				{/* {navigation.state === 'loading' && <p>Loading...</p>} */}
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
