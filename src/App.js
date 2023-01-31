import ExpenseItem from "./components/ExpenseItem";

function App() {
	return (
		<div className="app">
			<h2 className="app__title">Let's get started!</h2>
			<p className="app__description">This is also visible</p>
			<ExpenseItem></ExpenseItem>
		</div>
	);
}

export default App;
