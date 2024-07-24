import React from 'react';
import './ScoreAnalysis.css';

const ScoreAnalysis = ({ data }) => {
  const getColor = (grade) => {
    switch (grade) {
      case 'A':
        return 'green';
      case 'B':
        return 'yellow';
      case 'F':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <div className="score-analysis-container">
      {Object.keys(data.analysis).map((key, index) => {
        const item = data.analysis[key];
        if (key === 'Loan Offers') return null; // Exclude Loan Offers
        const gradeColor = getColor(item.grade);

        return (
          <div className="score-card" key={index} style={{ borderLeft: `4px solid ${gradeColor}` }}>
            <div className="score-header">
              <h3>{key}</h3>
              <span className={`grade ${gradeColor}`}>Grade {item.grade}</span>
            </div>
            <p>{key === 'Score Rating' ? item.rating : item.description}</p>
            <p className="result">{item.result}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ScoreAnalysis;
