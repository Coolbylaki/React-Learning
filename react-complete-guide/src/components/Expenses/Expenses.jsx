import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import { useState } from "react";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (year) => {
		setFilteredYear(year);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter onYearChange={filterChangeHandler} selected={filteredYear} />
			{props.items.map((expense) => (
				<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
			))}
		</Card>
	);
};

export default Expenses;
