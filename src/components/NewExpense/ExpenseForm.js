import { useState } from "react";
import "./ExpenseForm.css";
import Expense from "../../classes/Expense";

const ExpenseForm = (props) => {
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const nameChangeHandler = (e) => {
		setName(e.target.value);
	};

	const amountChangeHandler = (e) => {
		setAmount(e.target.value);
	};

	const dateChangeHandler = (e) => {
		setDate(e.target.value);
		console.log(date);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = new Expense(name, +amount, new Date(date));
		props.onSaveExpenseData(expenseData);
		setName("");
		setAmount("");
		setDate("");
	};

	return (
		<form className="form" onSubmit={submitHandler}>
			<div className="form__inputs">
				<div className="input-box">
					<label htmlFor="nameInput" className="inputs__label">
						Name
					</label>
					<input
						id="nameInput"
						type="text"
						value={name}
						className="inputs__input"
						onChange={nameChangeHandler}
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
						value={amount}
						className="inputs__input"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="input-box">
					<label htmlFor="dateInput" className="inputs__label">
						Date
					</label>
					<input
						id="dateInput"
						type="date"
						value={date}
						min="2019-01-01"
						max="2023-12-31"
						className="inputs__input"
						onChange={dateChangeHandler}
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
