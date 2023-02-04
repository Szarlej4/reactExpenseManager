import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [];

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
