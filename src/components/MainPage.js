import React from 'react';
import './MainPage.css';
import UserCreditScore from './UserCreditScore';
import CreditHistoryGraph from './CreditHistoryGraph';
import UserRecommendations from './UserRecommendations';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="centered-container">
        <UserCreditScore />
        <CreditHistoryGraph />
        <UserRecommendations />
      </div>
    </div>
  );
};

export default MainPage;
