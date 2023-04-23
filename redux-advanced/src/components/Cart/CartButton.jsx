import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice.js";
import { useDispatch } from "react-redux";

const CartButton = () => {
	const dispatch = useDispatch();

	const toggleCartHandler = () => {
		dispatch(uiActions.toggleVisibility());
	};

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>1</span>
		</button>
	);
};

export default CartButton;
