import React from 'react';
import './UserRecommendations.css';
import { FaStar, FaCarSide } from "react-icons/fa";

const UserRecommendations = () => {
  return (
    <div className="recommendation-card">
      <div className="recommendation-header">
        <FaStar className="star-icon" />
        <span>Recommended for You</span>
      </div>
      <div className="recommendation-content">
        <div className="text-content">
          <h2>$487 Interest Savings / 12 months*</h2>
          <p>Save on your existing car loan with an estimated interest savings of $487 over 12 months. By refinancing, you can lower your monthly payments and reduce the overall cost of your loan. Take advantage of this opportunity to improve your financial health and keep more money in your pocket.</p>
        </div>
        <div className="recommendation-footer">
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
      <div className="indicator-dots">
        <div className="active-dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default UserRecommendations;
