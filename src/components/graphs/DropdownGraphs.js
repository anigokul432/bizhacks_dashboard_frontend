import React, { useState, useMemo } from 'react';
import { Chart } from 'react-google-charts';
import './DropdownGraphs.css'; // Import the CSS file

const DropdownGraphs = () => {
  // State for bar values
  const [past12Months, setPast12Months] = useState(5);
  const [ageGroup12Months, setAgeGroup12Months] = useState(10);
  const [spendingType, setSpendingType] = useState('Groceries');

  // Options for the dropdown
  const spendingOptions = [
    'Groceries', 'Clothing', 'Housing', 'Education', 'Health',
    'Travel', 'Entertainment', 'Gambling', 'Utilities', 'Tax', 'Fines'
  ];

  // Raw data for the chart
  const rawData = [
    ['Category', 'Amount Spent'],
    ['Past 12 Months', past12Months],
    ['Past 12 Months for Same Age Group', ageGroup12Months],
  ];

  // Transform rawData to include style information
  const transformedData = useMemo(() => {
    return rawData.map((row, index) => {
      if (index === 0) {
        // Add style role to header
        return [...row, { role: 'style' }];
      }
      const [category, amount] = row;
      // Set color based on category
      const color = category === 'Past 12 Months' ? '#357abc' : '#9e9e9e'; // Blue for Past 12 Months, Gray for Age Group
      return [...row, color];
    });
  }, [past12Months, ageGroup12Months]);

  // Chart options
  const options = {
    chartArea: { width: '80%' }, // Adjust this to make more space for the Y-axis label
    hAxis: {
      title: 'Category',
      minValue: 0,
      titleTextStyle: {
        fontSize: 14,
        fontName: 'Roboto', // Font family for axis title
        italic: false,
      },
      textStyle: {
        fontSize: 12,
        fontName: 'Roboto', // Font family for axis text
        italic: false,
      },
    },
    vAxis: {
      title: 'Amount Spent',
      titleTextStyle: {
        fontSize: 14,
        fontName: 'Roboto', // Font family for axis title
        italic: false,
      },
      textStyle: {
        fontSize: 12,
        fontName: 'Roboto', // Font family for axis text
        italic: false,
      },
    },
    viewWindow: {
      min: Math.max(0, Math.min(past12Months, ageGroup12Months) - 1000), // Set minimum value for y-axis
      max: Math.min(100000000, Math.max(past12Months, ageGroup12Months) + 1000), // Set maximum value for y-axis
    },
    legend: { position: 'none' },
  };

  // Handle dropdown change
  const handleDropdownChange = (event) => {
    setSpendingType(event.target.value);
  };

  return (
    <div className="graph-wrapper">
      <h2 className="title-section">{spendingType} Spending Comparison Over 12 Months</h2>
      <div className="dropdown-section">
        <label htmlFor="spending-dropdown">Select Spending Type:</label>
        <select
          id="spending-dropdown"
          value={spendingType}
          onChange={handleDropdownChange}
        >
          {spendingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="chart-wrapper">
        <Chart
          width={'100%'}
          height={'400px'}
          chartType="ColumnChart"
          data={transformedData}
          options={options}
        />
      </div>
      <div className="controls-section">
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
