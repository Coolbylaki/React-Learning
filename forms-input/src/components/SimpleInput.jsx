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

	const {
		value: enteredEmail,
		hasError: emailInputHasError,
		reset: resetEmailInput,
		isValid: enteredEmailIsValid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
	} = useInput((value) => value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/));

	const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";

	const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		if (!enteredNameIsValid && !enteredEmailIsValid) {
			return;
		}

		resetNameInput();
		resetEmailInput();
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
				<input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
				{emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
