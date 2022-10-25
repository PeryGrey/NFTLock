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

  const [NFTdata, setNFTdata] = useState([]);

  const arr = [];

  useEffect(() => {
    props.connectState &&
      fetch(url, requestOptions)
        .then((response) => {
          console.log(response);
          return response.json();
        })

        .then((data) => {
          console.log(data['ownedNfts']);

          let i = 0;
          for (const element of data['ownedNfts']) {
            console.log(i);
            i++;
            const elObject = {};

            elObject['name'] = element.title;

            if (element.contractMetadata)
              elObject['collection'] = element.contractMetadata['name'];

            elObject['image'] =
              element.metadata.image_url ||
              element.media[0]['gateway'] ||
              element.metadata.image;

            arr.push(elObject);
          }
          setNFTdata(arr);

          console.log(NFTdata);
        })
        .catch((error) => console.log('error', error));
  }, [props.connectState]);

  const NFTcards = NFTdata.map((item) => {
    return (
      <div>
        <NFTDisplay
          name={item.name}
          collection={item.collection}
          image={item.image}
        />
      </div>
    );
  });

  return (
    <div className="container NFT-lock-header">
      {/* not connected */}
      {!props.connectState && <div>Not Connected</div>}

      {/* connected */}
      {props.connectState && (
        <div>
          <h2 className="lock-NFT-header">Your NFTs</h2>
          <div className="NFT-grid">{NFTcards}</div>
        </div>
      )}
    </div>
  );
}
