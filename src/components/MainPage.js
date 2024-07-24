import React, { useState, useEffect } from 'react';
import './MainPage.css';
import UserCreditScore from './UserCreditScore';
import CreditHistoryGraph from './graphs/CreditHistoryGraph';
import UserRecommendations from './UserRecommendations';
import DropdownGraphs from './graphs/DropdownGraphs';
import ScoreAnalysis from './ScoreAnalysis';
import './graphs/Combined.css';
import { MultiStepLoader } from '../components/ui/multi-step-loader.tsx'; // Ensure the path is correct
import TailwindWrapper from '../components/TailwindWrapper'; // Import the wrapper

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('Score Analysis');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id') || 'C07VC05Z4R';
    fetch(`https://ai-first.eastus.cloudapp.azure.com/report?cust_id=${id}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setTimeout(() => setLoading(false), 5200); // Add a delay to let the animation complete
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (loading || !data) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <TailwindWrapper>
          <MultiStepLoader 
            loadingStates={[
              { text: "Initializing AI-Powered Credit Score Agent...", },
              { text: "Fetching Your Payment History...", },
              { text: "Analyzing Recent Transactions...", },
              { text: "Calculating Credit Utilization...", },
              { text: "Generating Credit Score...", },
              { text: "Preparing Credit Report Analysis and Personalized Offer..."   },
            ]}
            loading={true}
            duration={1000}
            loop={false}
          />
        </TailwindWrapper>
      </div>
    );
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
