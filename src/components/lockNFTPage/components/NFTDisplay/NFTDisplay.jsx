import { replace } from 'lodash';
import React, { useState, useEffect } from 'react';

import './NFTDisplay.css';

import { ethers } from 'ethers';
import erc721ABI from '../../../../erc721ABI.json';

import sad from '../../../../images/sad.svg';

export default function NFTDisplay(props) {
  function replaceImage(error) {
    error.target.src = sad;
    error.target.className = 'image not-found';
  }

  // const setApproveForAll = async (e) => {
  //   e.preventDefault();

  //   const contractAddress = parseInt(props.contractAddress, 16);

  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   await provider.send('eth_requestAccounts', []);

  //   const signer = await provider.getSigner();
  //   const erc721 = new ethers.Contract(
  //     '0x4db1f25d3d98600140dfc18deb7515be5bd293af',
  //     erc721ABI,
  //     signer
  //   );
  //   await ethers.setApprovalForAll(contractAddress, true);
  // };

  const [click, updateClick] = useState(0);

  const handleLock = async (e) => {
    e.preventDefault();

    // const contractAddress = Number(props.contractAddress);
    // const id = Number(props.id);
    const contractAddress = props.contractAddress;
    const id = props.id;

    console.log(contractAddress, id);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);

    const signer = await provider.getSigner();
    const erc721 = new ethers.Contract(
      '0x2d60421775b099d36ba0acb4759f08c983a24f94',
      erc721ABI,
      signer
    );

    if (click % 2 === 0) await erc721.lock(id, contractAddress);
    else await erc721.unlock(id, contractAddress);

    updateClick(click + 1);
  };

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
        {/* <button className="btn NFT-lock-btn" onClick={handleLock}>
          {!props.locked ? 'Lock' : 'Unlock'} NFT
        </button> */}
        <button className="btn NFT-lock-btn" onClick={handleLock}>
          Lock/Unlock NFT
        </button>
      </div>
    </div>
  );
}
