import { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [formVisible, setFormVisible] = useState(false);

	const switchFormVisible = () => {
		formVisible ? setFormVisible(false) : setFormVisible(true);
	};

	const saveExpenseDataHandler = (expenseData) => {
		switchFormVisible();
		props.onAddExpense(expenseData);
	};

	const buttonStyles = {
		placeSelf: "center",
	};

	if (!formVisible) {
		return (
			<Card className="new-expense">
				<button
					style={buttonStyles}
					onClick={switchFormVisible}
					className="form__button">
					Add New Expense
				</button>
			</Card>
		);
	}

	return (
		<Card className="new-expense">
			<ExpenseForm
				onSwitchVisible={switchFormVisible}
				onSaveExpenseData={saveExpenseDataHandler}
			/>
		</Card>
	);
};

export default NewExpense;
