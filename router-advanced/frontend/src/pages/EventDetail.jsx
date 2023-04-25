import { useParams } from "react-router-dom";

const EventDetail = () => {
	const params = useParams();

	return (
		<>
			<h1>Event Detail Page!</h1>
			<p>You are viewing event with id: {params.eventId}</p>
		</>
	);
};

export default EventDetail;
