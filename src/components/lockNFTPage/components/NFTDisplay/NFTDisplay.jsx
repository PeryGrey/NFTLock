import { replace } from 'lodash';
import React, { useState, useEffect } from 'react';

import './NFTDisplay.css';

import sad from '../../../../images/sad.svg';

export default function NFTDisplay(props) {
  function replaceImage(error) {
    error.target.src = sad;
    error.target.className = 'image not-found';
  }

  return (
    <div>
      <div className="card">
        {props.image && (
          <img
            className="image"
            src={props.image}
            alt="image not found"
            loading="lazy"
            onError={(error) => replaceImage(error)}
          />
        )}

        {!props.image && (
          <img
            className="image not-found"
            src={sad}
            alt="image not found"
            loading="lazy"
          />
        )}
        <div className="NFT-deets">
          <h4 className="NFT-name">
            {props.name ? props.name : props.collection}
          </h4>
          <p className="NFT-collection">
            {props.collection ? props.collection : ''}
            &nbsp;
          </p>
        </div>
        <button className="btn NFT-lock-btn">Lock NFT</button>
      </div>
    </div>
  );
}
