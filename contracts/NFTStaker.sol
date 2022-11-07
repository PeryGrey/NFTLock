// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract NftStaker {
    IERC721 public parentNFT;

    struct StakedToken {
        address staker;
        uint256 tokenId;
    }

    struct Staker {
        StakedToken[] stakedTokens;
        uint256 timestamp;
    }

    // map staker address to stake details
    mapping(address => Staker) public stakers;

    // Mapping of Token Id to staker. Made for the SC to remeber
    // who to send back the ERC721 Token to.
    mapping(uint256 => address) public stakerAddress;

    // map staker to total staking time 
    mapping(address => uint256) public stakingTime;    

    // constructor(address contractAddress) {
    //     parentNFT = IERC721(contractAddress); // Change it to your NFT contract addr
    // }

    function lock(uint256 _tokenId, address contractAddress) public {
        require(IERC721(contractAddress).ownerOf(_tokenId) == msg.sender, "You don't own this token!");

        IERC721(contractAddress).safeTransferFrom(msg.sender, address(this), _tokenId);

        // Create StakedToken
        StakedToken memory stakedToken = StakedToken(msg.sender, _tokenId);

        // Add the token to the stakedTokens array
        stakers[msg.sender].stakedTokens.push(stakedToken);

        // Update the mapping of the tokenId to the staker's address
        stakerAddress[_tokenId] = msg.sender;
    } 

    function unlock(uint256 _tokenId, address contractAddress) public {
        require(stakerAddress[_tokenId] == msg.sender, "You don't own this token!");

        // Find the index of this token id in the stakedTokens array
        uint256 index = 0;
        for (uint256 i = 0; i < stakers[msg.sender].stakedTokens.length; i++) {
            if (stakers[msg.sender].stakedTokens[i].tokenId == _tokenId
                &&
                stakers[msg.sender].stakedTokens[i].staker != address(0)
            ) {
                index = i;
                break;
            }
        }

        // Set this token's .staker to be address 0 to mark it as no longer staked
        stakers[msg.sender].stakedTokens[index].staker = address(0);

        // Update the mapping of the tokenId to the be address(0) to indicate that the token is no longer staked
        stakerAddress[_tokenId] = address(0);

        // Transfer the token back to the withdrawer
        IERC721(contractAddress).safeTransferFrom(address(this), msg.sender, _tokenId);
    }      

     function onERC721Received(
        address operator,
        address from,
        uint256 tokenId, 
        bytes calldata data
    ) external returns (bytes4) {
        return bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));
    }

}