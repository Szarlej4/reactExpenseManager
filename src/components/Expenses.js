import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
	const expenses = props.expenses;
	return (
		<Card className="expenses">
			{expenses.map((element, id) => (
				<ExpenseItem key={`expenseItem${id}`} expense={element} />
			))}
		</Card>
	);
}

export default Expenses;
