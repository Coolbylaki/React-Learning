import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnterTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const titleChangeHandler = (e) => {
		setEnterTitle(e.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: e.target.value,
		// });

		// Rule: Whenever you update your state and depend on previous state following is better:
		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredTitle: e.target.value,
		// 	};
		// });
	};

	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
	};

	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		// Pass the data back to parent
		props.onSaveExepenseData(expenseData);

		setEnterTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input value={enteredTitle} type="text" onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
