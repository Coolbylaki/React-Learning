import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

import { useState } from "react";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const onSaveExepenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	let submitForm = "";
	if (isEditing) {
		submitForm = <ExpenseForm onSaveExepenseData={onSaveExepenseDataHandler} onCancel={stopEditingHandler} />;
	} else {
		submitForm = <button onClick={startEditingHandler}>Add New Expense</button>;
	}

	return <div className="new-expense">{submitForm}</div>;
};

export default NewExpense;
