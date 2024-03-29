import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice.js";
import { useDispatch, useSelector } from "react-redux";

const CartButton = () => {
	const dispatch = useDispatch();
	const cartQuantity = useSelector((state) => state.cart.totalQuantity);

	const toggleCartHandler = () => {
		dispatch(uiActions.toggleVisibility());
	};

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuantity}</span>
		</button>
	);
};

export default CartButton;
