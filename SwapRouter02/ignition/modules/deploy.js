// filepath: /C:/work/limit/SwapRouter02/ignition/modules/SwapRouter02.js
// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SwapRouter02Module", (m) => {
  const factoryV3 = "0x32e175A35150847cFe9172cca3810e1d7E48f773";
  const WETH9 = "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9";
  const positionManager= "0xa2bcBce9B2727CAd75ec42bFf76a6d85DA129B9C";
  const swapRouter02 = m.contract("SwapRouter02", [factoryV3, WETH9,
    positionManager]);

  return { swapRouter02 };
});