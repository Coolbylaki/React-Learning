import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EditEvent from "./pages/EditEvent";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EventRoot from "./pages/EventsRoot";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "events",
				element: <EventRoot />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{ path: "new", element: <NewEvent /> },
					{ path: ":eventId", element: <EventDetail /> },
					{ path: ":eventId/edit", element: <EditEvent /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
