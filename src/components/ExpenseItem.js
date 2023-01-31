import "./ExpenseItem.css";

function ExpenseItem() {
	return (
		<div className="expense">
			<p className="expense__name">Car Insurance</p>
			<div className="expense__price">$1294.67</div>
			<div className="expense__date">01-04-2013</div>
		</div>
	);
}

export default ExpenseItem;
