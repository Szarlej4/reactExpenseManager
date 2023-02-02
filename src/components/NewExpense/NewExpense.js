import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
	return (
		<Card className="new-expense">
			<ExpenseForm></ExpenseForm>
		</Card>
	);
};

export default NewExpense;
