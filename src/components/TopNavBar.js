import React from 'react';
import logo from '../logo.svg';
import './TopNavBar.css';
import { GoBell } from "react-icons/go";
import { RxGear } from "react-icons/rx";
import { RxExit } from "react-icons/rx";

const TopNavBar = () => {
  return (
    <div className="top-nav-bar">
      <img src={logo} alt="logo" className="logo" />
      
      <div className="nav-icons">
        <GoBell className="icon" />
        <RxGear className="icon" />
        <RxExit className="icon" />
      </div>
      
      <div className="user-info">
        <span className="user-icon">A</span>
        <span className="username">Anonymous</span>
      </div>
    </div>
  );
};

export default TopNavBar;
