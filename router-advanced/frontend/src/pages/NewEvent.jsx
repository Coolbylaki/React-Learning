import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEvent = () => {
	return <EventForm />;
};

export default NewEvent;

export async function action({ request, params }) {
	const data = await request.formData();

	const eventData = {
		title: data.get("title"),
		image: data.get("image"),
		date: data.get("date"),
		description: data.get("description"),
	};

	const response = await fetch("http://localhost:8081/events", {
		method: "POST",
		body: JSON.stringify(eventData),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw json({ message: "Could not save event!" }, { status: 500 });
	}

	return redirect("/events");
}
