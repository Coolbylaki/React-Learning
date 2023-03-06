import "./CourseInput.css";
import Button from "../../UI/Button/Button";

import { useState } from "react";

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="form-control">
				<label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
				<input
					type="text"
					onChange={goalInputChangeHandler}
					style={{ borderColor: !isValid ? "red" : "#ccc", backgroundColor: !isValid ? "salmon" : "white" }}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
