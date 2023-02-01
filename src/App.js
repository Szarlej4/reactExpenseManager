import ExpenseItem from "./components/ExpenseItem";
import Expense from "./classes/Expense";

function App() {
	const expenses = [
		new Expense("Car Insurance", 390.49, new Date(2023, 1, 17)),
		new Expense("New Phone", 799.99, new Date(2022, 11, 28)),
		new Expense("Bills", 399.99, new Date(2023, 11, 10)),
		new Expense("Christmas gifts", 956.25, new Date(2023, 12, 23)),
		new Expense("Trip to New York", 1294.67, new Date(2023, 11, 15)),
	];
	return (
		<div className="app">
			<h2 className="app__title">Let's get started!</h2>
			<p className="app__description">This is also visible</p>
			{expenses.map((element) => (
				<ExpenseItem expense={element}></ExpenseItem>
			))}
		</div>
	);
}

export default App;
