import "./ChartBar.css";

const ChartBar = (props) => {
	const { label, maxValue, value } = props;
	let barHeight = "0%";

	if (maxValue > 0) {
		barHeight = `${Math.round((value / maxValue) * 100)}%`;
	}

	return (
		<div className="chart__data-point">
			<div className="data-point__column">
				<div
					style={{ height: barHeight }}
					className="column__inner"></div>
			</div>
			<p className="data-point__name">{label}</p>
		</div>
	);
};

export default ChartBar;
