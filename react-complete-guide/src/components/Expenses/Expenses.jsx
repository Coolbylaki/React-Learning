import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import { useState } from "react";

const Expenses = (props) => {
	const { items } = props;
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (year) => {
		setFilteredYear(year);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter onYearChange={filterChangeHandler} selected={filteredYear} />
			<ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date} />
			<ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date} />
			<ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date} />
			<ExpenseItem title={items[3].title} amount={items[3].amount} date={items[3].date} />
		</Card>
	);
};

export default Expenses;
