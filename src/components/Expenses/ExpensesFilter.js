import "./ExpensesFilter.css";
import Card from "../UI/Card";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

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
			<Card className="filter__graph">
				{months.map((month, id) => {
					return (
						<div key={`graph__month${id}`} className="graph__month">
							<div className="month__column"></div>
							<p className="month__name">{month.slice(0, 3)}</p>
						</div>
					);
				})}
			</Card>
		</div>
	);
};

export default ExpensesFilter;
