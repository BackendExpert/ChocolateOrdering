// src/components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
  // Sample data with brown shades
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'],
    datasets: [
      {
        label: '# of Items',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#964B00',  // brown
          'rgba(139, 69, 19, 0.2)',  // saddlebrown
          'rgba(210, 105, 30, 0.2)', // chocolate
          'rgba(160, 82, 45, 0.2)',  // sienna
          'rgba(128, 0, 0, 0.2)',    // maroon
          'rgba(153, 101, 21, 0.2)', // darkgoldenrod
        ],
        borderColor: [
          'rgba(165, 42, 42, 1)',    // brown
          'rgba(139, 69, 19, 1)',    // saddlebrown
          'rgba(210, 105, 30, 1)',   // chocolate
          'rgba(160, 82, 45, 1)',    // sienna
          'rgba(128, 0, 0, 1)',      // maroon
          'rgba(153, 101, 21, 1)',   // darkgoldenrod
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-[300px] m-4 p-4 bg-white">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
