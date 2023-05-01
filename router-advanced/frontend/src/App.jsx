import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	Home,
	LayoutRoot,
	EventRoot,
	EditEvent,
	EventDetail,
	NewEvent,
	EventsPage,
	eventsLoader,
	ErrorPage,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutRoot />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
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
