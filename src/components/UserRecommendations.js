import React from 'react';
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
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center mb-4 bg-blue-100 p-2 rounded">
        <FaStar className="text-blue-500 mr-2" />
        <span className="font-bold text-blue-500">Recommended for You</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">{description}</h2>
          <p className="text-gray-700">
            You are eligible to receive a {description} at an interest rate of 
            <span className="font-bold"> {interest_rate}</span>!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaCarSide className="text-blue-500 mb-2" style={{ fontSize: '6rem' }} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default UserRecommendations;
