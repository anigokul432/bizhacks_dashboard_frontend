import React, { useState, useMemo } from 'react';
import { Chart } from 'react-google-charts';
import './DropdownGraphs.css';

const DropdownGraphs = ({ data }) => {
  const spendingOptions = Object.keys(data.spend);

  const formatOption = (option) => {
    return option.charAt(0).toUpperCase() + option.slice(1).toLowerCase();
  };

  const [spendingType, setSpendingType] = useState(spendingOptions[0]);
  const [past12Months, setPast12Months] = useState(data.spend[spendingType].spent);
  const [ageGroup12Months, setAgeGroup12Months] = useState(data.spend[spendingType].avg);

  const rawData = [
    ['Category', 'Amount Spent'],
    ['Past 12 Months', past12Months],
    ['Past 12 Months for Same Age Group', ageGroup12Months],
  ];

  const transformedData = useMemo(() => {
    return rawData.map((row, index) => {
      if (index === 0) {
        return [...row, { role: 'style' }];
      }
      const [category, amount] = row;
      const color = category === 'Past 12 Months' ? '#357abc' : '#9e9e9e';
      return [...row, color];
    });
  }, [past12Months, ageGroup12Months]);

  const options = {
    chartArea: { width: '80%' },
    hAxis: {
      title: 'Category',
      minValue: 0,
      titleTextStyle: { fontSize: 14, fontName: 'Roboto', italic: false },
      textStyle: { fontSize: 12, fontName: 'Roboto', italic: false },
    },
    vAxis: {
      title: 'Amount Spent',
      titleTextStyle: { fontSize: 14, fontName: 'Roboto', italic: false },
      textStyle: { fontSize: 12, fontName: 'Roboto', italic: false },
    },
    viewWindow: { min: 0, max: Math.ceil(Math.max(past12Months, ageGroup12Months) * 1.2) },
    legend: { position: 'none' },
  };

  const handleDropdownChange = (event) => {
    const selectedType = event.target.value.toUpperCase();
    setSpendingType(selectedType);
    setPast12Months(data.spend[selectedType].spent);
    setAgeGroup12Months(data.spend[selectedType].avg);
  };

  return (
    <div className="graph-wrapper">
      <h2 className="title-section">{formatOption(spendingType)} Spending Comparison Over 12 Months</h2>
      <div className="dropdown-section">
        <label htmlFor="spending-dropdown">Select Spending Type:</label>
        <select id="spending-dropdown" value={formatOption(spendingType)} onChange={handleDropdownChange}>
          {spendingOptions.map((option) => (
            <option key={option} value={formatOption(option)}>
              {formatOption(option)}
            </option>
          ))}
        </select>
      </div>
      <div className="chart-wrapper">
        <Chart width={'100%'} height={'400px'} chartType="ColumnChart" data={transformedData} options={options} />
      </div>
    </div>
  );
};

export default DropdownGraphs;
