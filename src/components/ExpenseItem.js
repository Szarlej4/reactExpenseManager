import "./ExpenseItem.css";

function ExpenseItem(expense) {
	console.log(expense);
	const { name, price, date } = expense.expense;
	return (
		<div className="expense">
			<p className="expense__name">{name}</p>
			<div className="expense__price">${price}</div>
			<div className="expense__date">{date.toLocaleDateString()}</div>
		</div>
	);
}

export default ExpenseItem;
