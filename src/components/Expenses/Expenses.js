import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const years = [2019, 2020, 2021, 2022, 2023];

const Expenses = (props) => {
	const { expenses } = props;
	const [year, setYear] = useState(years[years.length - 1].toString());

	const filterYearHandler = (year) => {
		setYear(year);
	};

	const filteredExpenses = expenses.filter(
		(element) => element.date.getFullYear().toString() === year,
	);

	return (
		<Card className="expenses">
			<ExpensesFilter
				value={year}
				years={years}
				onFilterYear={filterYearHandler}
			/>
			<ExpensesList expenses={filteredExpenses} year={year} />
		</Card>
	);
};

export default Expenses;
