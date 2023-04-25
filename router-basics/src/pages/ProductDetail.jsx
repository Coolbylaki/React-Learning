import { useParams } from "react-router-dom";

const ProductDetail = () => {
	const params = useParams();

	return (
		<>
			<h1>Product details</h1>
			<p>Parameter is: {params.productId}</p>
		</>
	);
};

export default ProductDetail;
