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
	eventDeleteAction,
} from "./pages";
import { action as manipulateEventAction } from "./components/EventForm";

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
								action: eventDeleteAction,
							},
							{ path: "edit", element: <EditEvent />, action: manipulateEventAction },
						],
					},
					{ path: "new", element: <NewEvent />, action: manipulateEventAction },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
