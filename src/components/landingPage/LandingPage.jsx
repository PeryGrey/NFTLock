import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './landingPage.css';

export default function LandingPage() {
  return (
    <div className="container landing-header">
      <div>
        <h2 className="topic-header">
          We protect your NFTs,
          <br />
          it's that simple!!
        </h2>

        <div className="text-emoji-container">
          <p className="topic-text ">Bye bye scammers</p>
          <div>👋</div>
        </div>

        <Link to="/lock-NFT" className="btn landing--protect">
          Protect your NFTs!
        </Link>
      </div>
      <div className="landing-steps">
        <div className="text-emoji-container">
          <h2 className="steps-heading">Why NFTLock?</h2>
          <div>🤔</div>
        </div>
        <div className="landing-steps-grid">
          {/* <div>
            <h4>1</h4>
            <p className="topic-text">
              You
              <span className="emphasise"> still own your NFT</span>.
            </p>
          </div> */}
          <div>
            <h4>1</h4>
            <p className="topic-text">
              Just
              <span className="emphasise"> pay gas fees to protect </span>
              your NFT.
            </p>
          </div>
          <div>
            <h4>2</h4>
            <p className="topic-text">
              <span className="emphasise">Pay gas fees to unlock </span> your
              NFT to move it around.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
