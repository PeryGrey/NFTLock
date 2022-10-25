import React, { useState, useEffect } from 'react';

// import image from '../../../../images/unnamed.gif';

import './NFTDisplay.css';

export default function NFTDisplay(props) {
  return (
    <div>
      <div className="card">
        <img
          className="image"
          src={props.image}
          alt="nft-image"
          loading="lazy"
        />
        <div className="NFT-deets">
          <h4 className="NFT-name">{props.name}</h4>
          <p className="NFT-collection">{props.collection}</p>
        </div>
        <button className="btn NFT-lock-btn">Lock NFT</button>
      </div>
    </div>
  );
}
