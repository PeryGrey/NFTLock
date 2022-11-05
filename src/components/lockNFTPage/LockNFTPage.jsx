import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { Alchemy, Network } from 'alchemy-sdk';

import NFTDisplay from './components/NFTDisplay/NFTDisplay';

import './lockNFTPage.css';

export default function LockNFTPage(props) {
  const baseURL =
    'https://eth-mainnet.g.alchemy.com/v2/hal332vSMD33evQX0JZznrZU4iEdupd8';

  const url = `${baseURL}/getNFTs/?owner=${props.walletAddr}`;

  var requestOptions = {
    method: 'get',
    redirect: 'follow',
  };

  const [NFTdata, setNFTdata] = useState([[]]);

  const arrLock = [];
  const arrUnlock = [];

  useEffect(() => {
    props.connectState &&
      fetch(url, requestOptions)
        .then((response) => {
          return response.json();
        })

        .then((data) => {
          // console.log(data['ownedNfts']);

          let i = 0;
          for (const element of data['ownedNfts']) {
            if (element['contractMetadata']['tokenType'] !== 'ERC721') continue;

            // console.log(i);
            // i++;
            const elObject = {};

            elObject['name'] = element.title;

            if (element.contractMetadata)
              elObject['collection'] =
                element.contractMetadata['openSea']['collectionName'] ||
                element.contractMetadata['name'];

            elObject['image'] =
              element.metadata.image_url ||
              element.media[0]['gateway'] ||
              element.metadata.image;

            if (Number(element.id['tokenId']) % 2 === 1) arrLock.push(elObject);
            else arrUnlock.push(elObject);
          }
          // console.log(arrLock, arrUnlock);
          const arr = [arrUnlock, arrLock];
          setNFTdata(arr);
        })
        .catch((error) => console.log('error', error));
  }, [props.connectState, props.responseStatus]);

  const [lockTab, setLockTab] = useState(false);

  const btn = document.querySelectorAll('.locked-btn');

  function toggleLockBtn(btnStr) {
    // console.log(btn);

    if (btnStr === lockTab) return;

    setLockTab(!lockTab);

    btn[0].classList.toggle('asserted-locked-btn');
    btn[1].classList.toggle('asserted-locked-btn');
  }

  const NFTcards = NFTdata[lockTab ? 1 : 0].map((item) => {
    return (
      <div>
        <NFTDisplay
          name={item.name}
          collection={item.collection}
          image={item.image}
          locked={lockTab}
        />
      </div>
    );
  });

  return (
    <div className="container NFT-lock-header">
      {/* not connected */}
      {!props.connectState && (
        <h2 className="lock-NFT-header">Please connect your wallet!</h2>
      )}

      {/* connected */}
      {props.connectState && (
        <div>
          <div className="lock-NFT-header">
            <h2>Your NFTs</h2>
            <div className="lock-btn-container">
              <button
                className="btn locked-btn asserted-locked-btn"
                onClick={() => {
                  toggleLockBtn(false);
                }}
              >
                Unlocked NFTs
              </button>
              <button
                className="btn locked-btn"
                onClick={() => {
                  toggleLockBtn(true);
                }}
              >
                Locked NFTs
              </button>
            </div>
          </div>

          {NFTdata[lockTab ? 1 : 0].length === 0 && (
            <div className="text-emoji-container">
              <p className="topic-text">No compatitble NFTs found in wallet!</p>
              <div> 😞</div>
            </div>
          )}

          <div className="NFT-grid">{NFTcards}</div>
        </div>
      )}
    </div>
  );
}
