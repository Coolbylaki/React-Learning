import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import { useState } from "react";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (year) => {
		setFilteredYear(year);
	};

	const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

	return (
		<Card className="expenses">
			<ExpensesFilter onYearChange={filterChangeHandler} selected={filteredYear} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
