import React, { useState, useEffect } from 'react';

import image from '../../../../images/unnamed.gif';

import './NFTDisplay.css';

export default function NFTDisplay() {
  return (
    <div>
      <div className="card">
        <img className="image" src={image} alt="hello" />
        <div className="NFT-deets">
          <h4 className="NFT-name">Scientist #1234</h4>
          <h4 className="NFT-collection">Kaiju Kingz</h4>
        </div>
        <button className="NFT-lock-btn">Lock NFT</button>
      </div>
    </div>
  );
}
