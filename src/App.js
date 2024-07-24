import React from 'react';
import logo from './logo.svg';
import TopNavBar from './components/TopNavBar';
import BottomBar from './components/BottomBar';
import MainPage from './components/MainPage';

function App() {
  return (
    <>
      <TopNavBar />
      <MainPage />
      <BottomBar />
    </>
  );
}

export default App;
