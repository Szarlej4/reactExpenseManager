import "./ExpenseForm.css";

const ExpenseForm = () => {
	return (
		<form className="form">
			<div className="form__inputs">
				<div className="input-box">
					<label htmlFor="nameInput" className="inputs__label">
						Name
					</label>
					<input
						id="nameInput"
						type="text"
						className="inputs__input"
					/>
				</div>
				<div className="input-box">
					<label htmlFor="amountInput" className="inputs__label">
						Amount
					</label>
					<input
						id="amountInput"
						type="number"
						min="0.01"
						step="0.01"
						className="inputs__input"
					/>
				</div>
				<div className="input-box">
					<label htmlFor="dateInput" className="inputs__label">
						Date
					</label>
					<input
						id="dateInput"
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						className="inputs__input"
					/>
				</div>
			</div>
			<button className="form__button" type="submit">
				Add Expense
			</button>
		</form>
	);
};

export default ExpenseForm;
