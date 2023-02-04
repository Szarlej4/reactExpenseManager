import "./Chart.css";
import Card from "../UI/Card";
import ChartBar from "./ChartBar";

const Chart = (props) => {
	const { dataPoints } = props;

	const maxValue = dataPoints.reduce(
		(acc, dataPoint) => acc + dataPoint.value,
		0,
	);

	return (
		<Card className="chart">
			{dataPoints.map((dataPoint) => (
				<ChartBar
					label={dataPoint.label}
					key={dataPoint.label}
					maxValue={maxValue}
					value={dataPoint.value}
				/>
			))}
		</Card>
	);
};

export default Chart;
