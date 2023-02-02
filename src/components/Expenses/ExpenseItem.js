import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

const ExpenseItem = (props) => {
	const { price, date } = props.expense;
	const [name, setName] = useState(props.expense.name);
	const clickHandler = () => {
		setName("essa");
	};
	return (
		<Card className="expense">
			<ExpenseDate date={date} />
			<p className="expense__name">{name}</p>
			<p className="expense__price">${price}</p>
			<button onClick={clickHandler} className="expense__change-title">
				Change Title
			</button>
		</Card>
	);
};

export default ExpenseItem;
