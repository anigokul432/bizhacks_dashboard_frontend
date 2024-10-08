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
              <h3>
                {key}
                {key !== 'Score Rating' && (
                  <i className="info-icon" title={item.description}>
                    ⓘ
                  </i>
                )}
              </h3>
              <span className={`grade ${gradeColor}`}>Grade {item.grade}</span>
            </div>
            {key === 'Score Rating' ? <p>{item.rating}</p> : null}
            <p className="result">{item.result}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ScoreAnalysis;
