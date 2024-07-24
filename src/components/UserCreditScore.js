import React, { useState } from 'react';
import GaugeComponent from 'react-gauge-component';
import './UserCreditScore.css';

const UserCreditScore = () => {
  const [creditScore, setCreditScore] = useState(700);

  return (
    <div className="user-credit-score-container">
      <div className="title">Credit Score</div>
      <div className="content">
        <div className="gauge-container">
          <GaugeComponent
            type="radial"
            value={creditScore}
            minValue={300}
            maxValue={850}
            arc={{
              colorArray: ['#EA4228', '#F28C28', '#FFD700', '#5BE12C'],
              subArcs: [
                { limit: 650, color: '#EA4228' },
                { limit: 700, color: '#F28C28' },
                { limit: 750, color: '#FFD700' },
                { limit: 850, color: '#5BE12C' }
              ],
              padding: 0.02,
              width: 0.3
            }}
            pointer={{
              type: 'needle',
              color: '#464A4F',
              length: 0.8,
              animationDuration: 3000
            }}
            labels={{
              valueLabel: { formatTextValue: value => value },
              tickLabels: {
                type: 'inner',
                valueConfig: { formatTextValue: value => value, fontSize: 10 },
                ticks: [
                  { value: 300 },
                  { value: 400 },
                  { value: 500 },
                  { value: 600 },
                  { value: 700 },
                  { value: 800 },
                  { value: 850 }
                ]
              }
            }}
          />
        </div>
        <div className="user-info">
          <div className="user-name">John Doe</div>
          <div className="user-email">john.doe@example.com</div>
          <div className="user-phone">Phone: (123) 456-7890</div>
          <div className="user-credit-card">Credit Card: Visa ending in 1234</div>
        </div>
      </div>
    </div>
  );
};

export default UserCreditScore;
