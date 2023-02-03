import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
	const { expenses, year } = props;

	if (expenses.length === 0) {
		return (
			<p className="expenses__message">
				There is no expenses in the year {year}
			</p>
		);
	}

	return (
		<ul className="expenses__list">
			{expenses.map((element) => (
				<ExpenseItem key={element.id} expense={element} />
			))}
		</ul>
	);
};

export default ExpensesList;
