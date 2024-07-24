import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import './DropdownGraphs.css'; // Import the CSS file

const DropdownGraphs = () => {
  // State for bar values
  const [past12Months, setPast12Months] = useState(5);
  const [ageGroup12Months, setAgeGroup12Months] = useState(10);
  const [spendingType, setSpendingType] = useState('Groceries');

  // Data for the chart
  const data = [
    ['Category', 'Value'],
    ['Past 12 Months', past12Months],
    ['Past 12 Months for Age Group', ageGroup12Months],
  ];

  // Chart options
  const options = {
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Value',
      minValue: 0,
    },
    vAxis: {
      title: 'Category',
    },
    colors: ['#1c91c0', '#e7711c'],
    legend: {position:'none'}
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">{spendingType} Spending Comparison Over 12 Months</h2>
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="Bar"
        data={data}
        options={options}
      />
      <div className="controls">
        <div>
          <label>
            Bar 1 Value:
            <input
              type="number"
              value={past12Months}
              onChange={(e) => setPast12Months(Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            Bar 2 Value:
            <input
              type="number"
              value={ageGroup12Months}
              onChange={(e) => setAgeGroup12Months(Number(e.target.value))}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default DropdownGraphs;
