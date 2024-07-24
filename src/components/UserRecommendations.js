import React from 'react';
import './UserRecommendations.css';
import { FaStar, FaCarSide } from "react-icons/fa";

const UserRecommendations = ({ data }) => {
  const loanOffers = data.analysis['Loan Offers'];
  const fallbackOffer = {
    description: "Basic Personal Loan",
    interest_rate: "10%"
  };
  const randomOffer = loanOffers.length > 0 ? loanOffers[Math.floor(Math.random() * loanOffers.length)] : fallbackOffer;
  const { description, interest_rate } = randomOffer;

  return (
    <div className="recommendation-card">
      <div className="recommendation-header">
        <FaStar className="star-icon" />
        <span>Recommended for You</span>
      </div>
      <div className="recommendation-content">
        <div className="text-content">
          <h2>{description}</h2>
          <p>You are eligible to receive a {description} at an interest rate of {interest_rate}!</p>
        </div>
        <div className="recommendation-footer">
          <FaCarSide className="car-icon" />
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
