import Chart from "react-apexcharts";
import {getBarChartData} from "../../constants/BarChartData"
const Barchart = ({darkMode}) => {
  const chartData = getBarChartData(darkMode);
  return (
    <div className="px-4 pb-0">
        <Chart options={chartData.options} series={chartData.series} type="bar" height="240" />
    </div>
  )
}

export default Barchart
