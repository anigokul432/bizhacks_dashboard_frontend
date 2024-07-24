import React from 'react';
import '../tailwind.css'; // Import Tailwind CSS here

const TailwindWrapper = ({ children }) => {
  return (
    <div className="tailwind-wrapper">
      {children}
    </div>
  );
};

export default TailwindWrapper;
