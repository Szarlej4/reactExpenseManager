import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const years = [2019, 2020, 2021, 2022, 2023];

const Expenses = (props) => {
	const expenses = props.expenses;
	const [value, setValue] = useState(years[0]);

	const filterYearHandler = (year) => {
		setValue(year);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				value={value}
				years={years}
				onFilterYear={filterYearHandler}
			/>
			{expenses.map((element, id) => (
				<ExpenseItem key={`expenseItem${id}`} expense={element} />
			))}
		</Card>
	);
};

export default Expenses;
