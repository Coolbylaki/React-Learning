import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEvent = () => {
	const data = useRouteLoaderData("event-detail");

	return <EventForm event={data.event} />;
};

export default EditEvent;
