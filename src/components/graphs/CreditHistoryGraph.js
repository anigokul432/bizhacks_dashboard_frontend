import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import './CreditHistoryGraph.css'; // Import the CSS file

const CreditHistoryChart = ({ data }) => {
  // Example credit history data with formatted dates and annotations
  const initialData = [['Date', 'Credit Score'], ...data.trends.data];

  const [rawData, setRawData] = useState(initialData);
  const [transformedData, setTransformedData] = useState([]);

  // Color gradient function
  const getColor = (value) => {
    const min = 300;
    const max = 850;
    const range = max - min;
    const percentage = (value - min) / range;

    // Define gradient colors
    const colors = [
      { offset: 0, color: [255, 0, 0] }, // Red
      { offset: 0.33, color: [255, 165, 0] }, // Orange
      { offset: 0.67, color: [255, 255, 0] }, // Yellow
      { offset: 1, color: [0, 128, 0] } // Green
    ];

    // Determine color based on percentage
    let startColor, endColor;
    for (let i = 0; i < colors.length - 1; i++) {
      if (percentage >= colors[i].offset && percentage <= colors[i + 1].offset) {
        startColor = colors[i];
        endColor = colors[i + 1];
        break;
      }
    }

    // Calculate the interpolation factor
    const segmentLength = endColor.offset - startColor.offset;
    const segmentProgress = (percentage - startColor.offset) / segmentLength;

    // Interpolate between the start and end colors
    const red = Math.round(startColor.color[0] + segmentProgress * (endColor.color[0] - startColor.color[0]));
    const green = Math.round(startColor.color[1] + segmentProgress * (endColor.color[1] - startColor.color[1]));
    const blue = Math.round(startColor.color[2] + segmentProgress * (endColor.color[2] - startColor.color[2]));

    return `rgb(${red}, ${green}, ${blue})`;
  };

  // Function to transform rawData to include style and annotation without adding columns
  const transformData = () => {
    const newTransformedData = rawData.map((row, index) => {
      if (index === 0) {
        return [...row, { role: 'style' }, { role: 'annotation' }]; // Add style and annotation roles to header
      }
      const [date, score] = row;
      const color = getColor(score);
      return [...row, color, score]; // Add color and annotation for each row
    });
    setTransformedData(newTransformedData);
  };

  useEffect(() => {
    transformData();
  }, [rawData]);

  // Chart options with non-italicized axis text and Roboto font
  const options = {
    curveType: 'none',
    legend: { position: 'none' }, // Remove the legend
    hAxis: {
      title: 'Date',
      format: 'MMM yyyy',
      textStyle: {
        fontSize: 12,
        fontName: 'Roboto', // Font family for axis text
        italic: false,
      },
      titleTextStyle: {
        fontSize: 14,
        fontName: 'Roboto', // Font family for axis title
        italic: false,
      },
    },
    vAxis: {
      title: 'Credit Score',
      viewWindow: {
        min: 300, // Set minimum value for y-axis
        max: 850, // Set maximum value for y-axis
      },
      viewWindowMode: 'explicit',
      textStyle: {
        fontSize: 12,
        fontName: 'Roboto', // Font family for axis text
        italic: false,
      },
      titleTextStyle: {
        fontSize: 14,
        fontName: 'Roboto', // Font family for axis title
        italic: false,
      },
    },
    pointSize: 5,
    pointsVisible: true,
    annotations: {
      alwaysOutside: true, // Always show annotations outside the points
      textStyle: {
        fontSize: 12,
        fontName: 'Roboto',
        color: '#000',
        auraColor: 'none',
      },
    },
    series: {
      0: {
        color: '#1c91c0', // Default color for the line
        lineWidth: 2,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title font-bold">Credit History Chart</h2>
      <div className="chart-wrapper">
        <div className="chart">
          <Chart
            width={'calc(100% + 70px)'} // Adjust width for color bar + padding
            height={'400px'}
            chartType="LineChart"
            data={transformedData}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditHistoryChart;
