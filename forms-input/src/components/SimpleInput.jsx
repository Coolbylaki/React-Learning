import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
	const [enteredEmail, setEnteredEmail] = useState("");

	const enteredEmailIsValid =
		enteredEmail.trim() !== "" && enteredEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
	const emailInputClasses = emailInputIsInvalid ? "form-control invalid" : "form-control";

	const enteredNameIsValid = enteredName.trim() !== "";
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
	const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (e) => {
		const name = e.target.value;
		setEnteredName(name);
	};

	const nameInputBlurHandler = () => {
		setEnteredNameTouched(true);
	};

	const emailInputChangeHandler = (e) => {
		const email = e.target.value;
		setEnteredEmail(email);
	};

	const emailInputBlurHandler = () => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredNameTouched(true);
		setEnteredEmailTouched(true);

		if (!enteredNameIsValid && !enteredEmailIsValid) {
			return;
		}

		setEnteredName("");
		setEnteredEmail("");
		setEnteredEmailTouched(false);
		setEnteredNameTouched(false);
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					id="name"
					type="text"
					value={enteredName}
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
				/>
				{nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
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
				{emailInputIsInvalid && <p className="error-text">Email must be correct</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
