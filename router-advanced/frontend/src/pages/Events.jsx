import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
	const data = useLoaderData();
	const events = data.events;

	return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
	const response = await fetch("http://localhost:8081/events");

	if (!response.ok) {
		//... later
	} else {
		return response;
	}
}
