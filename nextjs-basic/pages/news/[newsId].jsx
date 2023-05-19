import { useRouter } from "next/router";

const DetailsPage = () => {
	const router = useRouter();
	const { newsId } = router.query;

	return <h1>Details Page</h1>;
};

export default DetailsPage;
