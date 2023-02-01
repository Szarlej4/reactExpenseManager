import "./ExpenseDate.css";
import Card from "../UI/Card";

const ExpenseDate = (props) => {
	const { date } = props;
	const year = date.getFullYear();
	const month = date.toLocaleString("en-US", { month: "long" }).slice(0, 3);
	const day = date.toLocaleString("en-US", { day: "2-digit" });
	return (
		<Card className="date">
			<p className="date__year">{year}</p>
			<p className="date__month-name">{month}</p>
			<p className="date__day">{day}</p>
		</Card>
	);
};

export default ExpenseDate;
