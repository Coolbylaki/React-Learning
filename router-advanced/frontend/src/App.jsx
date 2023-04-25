// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EditEvent from "./pages/EditEvent";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{ path: "events", element: <EventsPage /> },
			{ path: "events/new", element: <NewEvent /> },
			{ path: "events/:eventId", element: <EventDetail /> },
			{ path: "events/:eventId/edit", element: <EditEvent /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
