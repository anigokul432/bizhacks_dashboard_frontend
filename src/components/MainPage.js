import React, { useState } from 'react';
import './MainPage.css';
import UserCreditScore from './UserCreditScore';
import CreditHistoryGraph from './graphs/CreditHistoryGraph';
import UserRecommendations from './UserRecommendations';
import DropdownGraphs from './graphs/DropdownGraphs';
import './graphs/Combined.css'

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('Score Analysis');

  return (
    <div className="main-page">
      <div className="top-cards">
        <div className="user-credit-score">
          <UserCreditScore />
        </div>
        <div className="user-recommendations">
          <UserRecommendations />
        </div>
      </div>
      <div className="tabs">
        <button className={activeTab === 'Score Analysis' ? 'active' : ''} onClick={() => setActiveTab('Score Analysis')}>
          Score Analysis
        </button>
        <button className={activeTab === 'Graph' ? 'active' : ''} onClick={() => setActiveTab('Graph')}>
          Graph
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'Graph' && (
          <div className="graphs-container">
            <CreditHistoryGraph />
            <DropdownGraphs />
          </div>
        )}
        {activeTab === 'Score Analysis' && (
          <div className="score-analysis-content">
            {/* Content for Score Analysis */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;