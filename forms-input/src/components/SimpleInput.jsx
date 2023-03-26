import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== "";
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
	const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

	let formIsValid = false;

	if (enteredNameIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (e) => {
		const name = e.target.value;
		setEnteredName(name);
	};

	const nameInputBlurHandler = () => {
		setEnteredNameTouched(true);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredNameTouched(true);

		if (!enteredNameIsValid) {
			return;
		}

		console.log(enteredName);

		setEnteredName("");
		setEnteredNameTouched(false);
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
