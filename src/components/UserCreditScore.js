import React from 'react';
import GaugeComponent from 'react-gauge-component';
import './UserCreditScore.css';

const UserCreditScore = ({ data }) => {
  const credit_score = data.credit_score;
  const name = "John Doe";
  const email = "john.doe@example.com";
  const phone = "+1 (938) 654-3445";

  return (
    <div className="user-credit-score-container">
      <div className="title">Credit Score</div>
      <div className="content">
        <div className="gauge-container">
          <GaugeComponent
            type="radial"
            value={credit_score}
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
        <div className="user-information">
          <div className="user-name">{name}</div>
          <div className="user-email">{email}</div>
          <div className="user-phone">Phone: {phone}</div>
          <div className="user-credit-card">Credit Card: Visa ending in 1234</div>
        </div>
      </div>
    </div>
  );
};

export default UserCreditScore;
