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
          its that simple!!
        </h2>

        <p className="topic-text">Bye bye scammers 👋</p>

        <Link to="/lock-NFT" className="landing--protect">
          Protect your NFTs!
        </Link>
      </div>
      <div className="landing-steps">
        <h2 className="steps-heading">Things you'll want to know 🤔</h2>
        <div className="landing-steps-grid">
          <div>
            <h4>1</h4>
            <p className="topic-text">
              The locked NFT will remain
              <span className="emphasise"> untradeable in your wallet.</span>
            </p>
          </div>
          <div>
            <h4>2</h4>
            <p className="topic-text">
              Just <span className="emphasise">pay gas fees to protect </span>
              your NFT.
            </p>
          </div>
          <div>
            <h4>3</h4>
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
