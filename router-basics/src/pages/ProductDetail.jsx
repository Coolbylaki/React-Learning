import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
	const params = useParams();

	return (
		<>
			<h1>Product details</h1>
			<p>Parameter is: {params.productId}</p>
			<p>
				<Link to=".." relative="path">
					Back
				</Link>
			</p>
		</>
	);
};

export default ProductDetail;
