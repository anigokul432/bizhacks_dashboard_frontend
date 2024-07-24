import React from 'react';
import './TopNavBar.css';
import { GoBell } from 'react-icons/go';
import { RxGear, RxExit } from 'react-icons/rx';
import logo from '../logo.svg';

const TopNavBar = () => {
  return (
    <div className="top-nav-bar">
      <img src={logo} alt="logo" className="logo" />
      <div className="nav-right">
        <div className="icon-group">
          <GoBell className="icon" />
          <div className="divider"></div>
          <RxGear className="icon" />
          <div className="divider"></div>
          <RxExit className="icon" />
        </div>
        <div className="user-info">
          <span className="user-icon">A</span>
          <span className="username">Anonymous</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
