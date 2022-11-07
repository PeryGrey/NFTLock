const Lock = artifacts.require('./NFTStaker.sol')

module.exports = function (deployer, network, [owner]) {
  deployer.deploy(
    Lock,
    0x39ec448b891c476e166b3c3242a90830db556661
  )
};
