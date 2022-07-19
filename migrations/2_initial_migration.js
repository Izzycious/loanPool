const poolcompound = artifacts.require("poolcompound");

module.exports = function (deployer) {
  deployer.deploy(poolcompound);
};