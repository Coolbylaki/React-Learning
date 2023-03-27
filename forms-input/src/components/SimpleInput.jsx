import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
	const {
		value: enteredName,
		hasError: nameInputHasError,
		reset: resetNameInput,
		isValid: enteredNameIsValid,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
	} = useInput((value) => value.trim() !== "");

	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredEmailIsValid =
		enteredEmail.trim() !== "" && enteredEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
	const emailInputClasses = emailInputIsInvalid ? "form-control invalid" : "form-control";

	const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const emailInputChangeHandler = (e) => {
		const email = e.target.value;
		setEnteredEmail(email);
	};

	const emailInputBlurHandler = () => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredEmailTouched(true);

		if (!enteredNameIsValid && !enteredEmailIsValid) {
			return;
		}

		resetNameInput();

		setEnteredEmail("");
		setEnteredEmailTouched(false);
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input id="name" type="text" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
				{nameInputHasError && <p className="error-text">Name must not be empty.</p>}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">Your Email</label>
				<input
					type="email"
					id="email"
					value={enteredEmail}
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
				/>
				{emailInputIsInvalid && <p className="error-text">Please enter a valid email.</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
