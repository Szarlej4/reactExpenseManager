import Expenses from "./components/Expenses";
import Expense from "./classes/Expense";

function App() {
	const expenses = [
		new Expense("Car Insurance", 390.49, new Date(2023, 0, 17)),
		new Expense("New Phone", 799.99, new Date(2022, 10, 28)),
		new Expense("Bills", 399.99, new Date(2022, 10, 10)),
		new Expense("Christmas gifts", 956.25, new Date(2022, 11, 23)),
		new Expense("Trip to New York", 1294.67, new Date(2022, 10, 15)),
	];

	return (
		<main className="app">
			<h2 className="app__title">My expenses</h2>
			<Expenses key="expenses" expenses={expenses} />
		</main>
	);
}

export default App;
