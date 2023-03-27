import useInput from "../hooks/use-input";

const BasicForm = (props) => {
	const {
		value: enteredName,
		isValid: isNameValid,
		hasError: nameHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: nameResetHandler,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredLastName,
		isValid: isLastNameValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameResetHandler,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredEmail,
		isValid: isEmailValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailResetHandler,
	} = useInput((value) => value.includes("@"));

	let isFormValid = isNameValid && isLastNameValid && isEmailValid;

	const nameClasses = nameHasError ? "form-control invalid" : "form-control";
	const lastNameClasses = lastNameHasError ? "form-control invalid" : "form-control";
	const emailClasses = emailHasError ? "form-control invalid" : "form-control";

	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (!isFormValid) {
			return;
		}

		console.log({
			name: enteredName,
			lastName: enteredLastName,
			email: enteredEmail,
		});

		emailResetHandler();
		nameResetHandler();
		lastNameResetHandler();
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="control-group">
				<div className={nameClasses}>
					<label htmlFor="name">First Name</label>
					<input type="text" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
					{nameHasError && <p className="error-text">Enter valid name.</p>}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						value={enteredLastName}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameHasError && <p className="error-text">Enter valid last name.</p>}
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor="name">E-Mail Address</label>
				<input type="text" id="name" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
				{emailHasError && <p className="error-text">Enter valid email.</p>}
			</div>
			<div className="form-actions">
				<button disabled={!isFormValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
