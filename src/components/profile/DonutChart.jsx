import React from 'react';
import Chart from 'react-apexcharts';
import { getDonutChartData } from '../../constants/DonutChartData';

const DonutChart = ({ darkMode }) => {
  const chartData = getDonutChartData(darkMode);

  return (
    <div className="py-6 bg-white rounded-full p-5 flex dark:bg-gray-600 items-center justify-center">
      <Chart options={chartData.options} 
      series={chartData.series} type="donut"
      height={350} />
    </div>
  );
};

export default DonutChart;
