import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

import LandingPage from './components/landingPage/LandingPage';
import LockNFTPage from './components/lockNFTPage/LockNFTPage';


import './App.css';
import './general.css';

// function IsConnected() {

// }

function App() {

  const [connectState, setConnected] = useState(true);

  function toggleConnect() {
    setConnected(!connectState)
  }



  return (
    <div className="App">
      <Header connectState={connectState} />
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/lock-NFT"
          element={<LockNFTPage connectState={connectState} />}
        />
      </Routes>
    </div>
  );
}

export default App;
