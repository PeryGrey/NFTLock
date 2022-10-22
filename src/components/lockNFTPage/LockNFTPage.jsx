import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import NFTDisplay from './components/NFTDisplay/NFTDisplay';

import './lockNFTPage.css';

export default function LockNFTPage(props) {
  return (
    <div className="container NFT-lock-header">
      {/* not connected */}
      {!props.connectState && <div>Not Connected</div>}

      {/* connected */}
      {props.connectState && (
        <div>
          <h2 className="lock-NFT-header">Your NFTs</h2>

          <div className="NFT-grid">
            <NFTDisplay />
            <NFTDisplay />
            <NFTDisplay />
            <NFTDisplay />
            <NFTDisplay />
          </div>
        </div>
      )}
    </div>
  );
}
