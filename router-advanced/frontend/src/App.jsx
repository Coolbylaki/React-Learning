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
	eventDetailsLoader,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutRoot />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "events",
				element: <EventRoot />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ":eventId",
						id: "event-detail",
						loader: eventDetailsLoader,
						children: [
							{
								index: true,
								element: <EventDetail />,
							},
							{ path: "edit", element: <EditEvent /> },
						],
					},
					{ path: "new", element: <NewEvent /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
