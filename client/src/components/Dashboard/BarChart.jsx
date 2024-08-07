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
          '#964B00',  // saddlebrown
          '#964B00', // chocolate
          '#964B00',  // sienna
          '#964B00',    // maroon
          '#964B00', // darkgoldenrod
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on x-axis
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines on y-axis
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-[300px] m-4 p-4 bg-white rounded shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
