import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
	const years = props.years;

	const filterChangeHandler = (e) => {
		props.onFilterYear(e.target.value);
	};

	return (
		<div className="filter">
			<p className="filter__text">Filter by year</p>
			<select
				value={props.value}
				onChange={filterChangeHandler}
				className="filter__select">
				{years.map((year, id) => (
					<option key={`option${id}`} value={year}>
						{year}
					</option>
				))}
			</select>
		</div>
	);
};

export default ExpensesFilter;
