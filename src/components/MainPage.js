import React, { useState, useEffect } from 'react';
import './MainPage.css';
import UserCreditScore from './UserCreditScore';
import CreditHistoryGraph from './graphs/CreditHistoryGraph';
import UserRecommendations from './UserRecommendations';
import DropdownGraphs from './graphs/DropdownGraphs';
import ScoreAnalysis from './ScoreAnalysis';
import './graphs/Combined.css';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('Score Analysis');
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://ai-first.eastus.cloudapp.azure.com/report?cust_id=C07VC05Z4R')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-page">
      <div className="top-cards">
        <div className="user-credit-score">
          <UserCreditScore data={data} />
        </div>
        <div className="user-recommendations">
          <UserRecommendations data={data} />
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
            <CreditHistoryGraph data={data} />
            <DropdownGraphs data={data} />
          </div>
        )}
        {activeTab === 'Score Analysis' && (
          <div className="score-analysis-content">
            <ScoreAnalysis data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
