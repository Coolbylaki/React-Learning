import { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (prevState, action) => {
	if (action.type === "USER_INPUT") {
		return {
			value: action.val,
			isValid: action.val.includes("@"),
		};
	}
	if (action.type === "INPUT_BLUR") {
		return {
			value: prevState.value,
			isValid: prevState.value.includes("@"),
		};
	}
	return {
		value: "",
		isValid: false,
	};
};

const passwordReducer = (prevState, action) => {
	if (action.type === "USER_INPUT") {
		return {
			value: action.val,
			isValid: action.val.trim().length > 6,
		};
	}
	if (action.type === "INPUT_BLUR") {
		return {
			value: prevState.value,
			isValid: prevState.value.trim().length > 6,
		};
	}
	return {
		value: "",
		isValid: false,
	};
};

const Login = (props) => {
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: undefined,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: undefined,
	});

	const authCtx = useContext(AuthContext);

	const { isValid: isEmailValid } = emailState;
	const { isValid: isPasswordValid } = passwordState;

	useEffect(() => {
		const indentifier = setTimeout(() => {
			console.log("Checking form validity!");
			setFormIsValid(isEmailValid && isPasswordValid);
		}, 500);

		return () => {
			console.log("CLEANUP");
			clearTimeout(indentifier);
		};
	}, [isEmailValid, isPasswordValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({
			type: "USER_INPUT",
			val: event.target.value,
		});
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({
			type: "USER_INPUT",
			val: event.target.value,
		});
	};

	const validateEmailHandler = () => {
		dispatchEmail({
			type: "INPUT_BLUR",
		});
	};

	const validatePasswordHandler = () => {
		dispatchPassword({
			type: "INPUT_BLUR",
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		authCtx.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					id="email"
					label="E-Mail"
					type="email"
					isValid={isEmailValid}
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					isValid={isPasswordValid}
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
