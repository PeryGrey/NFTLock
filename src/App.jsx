import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import detectEthereumProvider from '@metamask/detect-provider';

import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

import LandingPage from './components/landingPage/LandingPage';
import LockNFTPage from './components/lockNFTPage/LockNFTPage';
import AlertConnect from './components/alert/AlertConnect';

import './App.css';
import './general.css';

function App() {
  const [connectState, setConnect] = useState(false);
  const [connectClicked, incrementClick] = useState(0);

  const [walletAddr, setWalletAddress] = useState('');

  // metamask response for pop-up
  const [responseStatus, setResponseStatus] = useState();

  useEffect(async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setConnect(true);
        console.log(walletAddr);
        setResponseStatus(2);
      }
    } else {
      console.log('4');
      setResponseStatus(4);
    }
  }, []);

  window.ethereum.on('accountsChanged', async () => {
    window.location.reload(false);
    setConnect(!connectState);
  });

  return (
    <div className="App">
      <Header
        connectState={connectState}
        setConnect={setConnect}
        walletAddr={walletAddr}
        setWalletAddress={setWalletAddress}
        responseStatus={responseStatus}
        setResponseStatus={setResponseStatus}
        connectClicked={connectClicked}
        incrementClick={incrementClick}
      />

      <AlertConnect
        type={'connect'}
        responseStatus={responseStatus}
        connectClicked={connectClicked}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/lock-NFT"
          element={
            <LockNFTPage
              connectState={connectState}
              walletAddr={walletAddr}
              responseStatus={responseStatus}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
