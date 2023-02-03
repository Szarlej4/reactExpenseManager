import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const years = [2019, 2020, 2021, 2022, 2023];

const Expenses = (props) => {
	const expenses = props.expenses;
	const [year, setYear] = useState(years[0]);

	const filterYearHandler = (year) => {
		setYear(year);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				value={year}
				years={years}
				onFilterYear={filterYearHandler}
			/>
			{expenses
				.filter((element) => element.date.getFullYear() === year)
				.map((element) => (
					<ExpenseItem key={element.id} expense={element} />
				))}
		</Card>
	);
};

export default Expenses;
