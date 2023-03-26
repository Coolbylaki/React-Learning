import { useRef, useState } from "react";

const SimpleInput = (props) => {
	const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const nameInputChangeHandler = (e) => {
		const name = e.target.value;
		setEnteredName(name);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredNameTouched(true);

		if (enteredName.trim() === "") {
			setEnteredNameIsValid(false);
			return;
		}

		setEnteredNameIsValid(true);

		const enteredValue = nameInputRef.current.value;
		console.log(enteredValue);
		setEnteredName("");
	};

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input ref={nameInputRef} type="text" id="name" onChange={nameInputChangeHandler} value={enteredName} />
				{nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
