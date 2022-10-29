import React, { useState, useEffect } from 'react';

import './alert.css';

export default function alert(props) {
  const connectionAlert = () => {
    setTimeout(
      <div>
        <div
          className={`alert ${
            props.responseStatus === 200 ? 'connected' : 'not-connected'
          }`}
        >
          <svg
            class="alert-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <title>Alert Circle</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
              fill="none"
            />
            <path
              d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              fill="none"
            />
            <path
              d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z"
              fill="#17252a"
            />
          </svg>
          <div>
            {props.responseStatus === 200 && (
              <div>
                <h2 className="alert-header">Connected</h2>
                <p className="alert-text">Sucessfully signed in</p>
              </div>
            )}

            {props.responseStatus !== 200 && (
              <div>
                <h2 className="alert-header">Error</h2>
                <p className="alert-text">Try connecting wallet again</p>
              </div>
            )}
          </div>
        </div>
      </div>,
      5000
    );
  };
  console.log('hello');

  return <div>{connectionAlert()}</div>;
}
