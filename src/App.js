import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Expense from "./classes/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
	new Expense("Car Insurance", 390.49, new Date(2023, 0, 17)),
	new Expense("New Phone", 799.99, new Date(2022, 10, 28)),
	new Expense("Bills", 399.99, new Date(2022, 10, 10)),
	new Expense("Christmas gifts", 956.25, new Date(2022, 11, 23)),
	new Expense("Trip to New York", 1294.67, new Date(2022, 10, 15)),
];

const App = () => {
	const [expenses, setExpenses] = useState(initialExpenses);

	const addExpenseHandler = (newExpense) => {
		setExpenses((previousExpenses) => {
			return [newExpense, ...previousExpenses];
		});
	};

	return (
		<main className="app">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses key="expenses" expenses={expenses} />
		</main>
	);
};

export default App;
