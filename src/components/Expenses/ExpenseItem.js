import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
	const { name, price, date } = props.expense;
	return (
		<Card className="expense">
			<ExpenseDate date={date} />
			<p className="expense__name">{name}</p>
			<p className="expense__price">${price}</p>
		</Card>
	);
};

export default ExpenseItem;
