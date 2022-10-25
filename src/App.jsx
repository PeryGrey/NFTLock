import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';

import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

import LandingPage from './components/landingPage/LandingPage';
import LockNFTPage from './components/lockNFTPage/LockNFTPage';

import './App.css';
import './general.css';

function App() {
  const [connectState, setConnect] = useState(false);

  const [walletAddr, setWalletAddress] = useState('');

  async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      // if (accounts.length !== 0) {
      // const wallet = accounts[0];
      setWalletAddress(accounts[0]);
      setConnect(true);
      console.log(walletAddr);
      // }
    } else {
      alert('Please install Mask');
    }
  }
  console.log('start');

  return (
    <div className="App">
      <Header connectState={connectState} connectWallet={connectWallet} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/lock-NFT"
          element={
            <LockNFTPage connectState={connectState} walletAddr={walletAddr} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
