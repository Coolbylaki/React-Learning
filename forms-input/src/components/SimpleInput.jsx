import { useRef, useState } from "react";

const SimpleInput = (props) => {
	const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState("");

	const nameInputChangeHandler = (e) => {
		const name = e.target.value;
		setEnteredName(name);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		const enteredValue = nameInputRef.current.value;

		setEnteredName("");
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input ref={nameInputRef} type="text" id="name" onChange={nameInputChangeHandler} value={enteredName} />
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
