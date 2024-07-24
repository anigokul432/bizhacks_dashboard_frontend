import React from 'react';
import './MainPage.css';
import UserCreditScore from './UserCreditScore';
import CreditHistoryGraph from './graphs/CreditHistoryGraph';
import UserRecommendations from './UserRecommendations';
import DropdownGraphs from './graphs/DropdownGraphs';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="centered-container">
        <UserCreditScore />
        <div className="graphs-container">
          <div className="graph">
            <CreditHistoryGraph />
          </div>
          <div className="graph">
            <DropdownGraphs />
          </div>
        </div>
        <UserRecommendations />
      </div>
    </div>
  );
};

export default MainPage;
