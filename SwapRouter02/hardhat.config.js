require("@nomicfoundation/hardhat-toolbox");
//require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // Load environment variables from .env
//require('@nomicfoundation/hardhat-ignition');

const privateKey = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
      },
      {
        version: "0.8.28",
      },
    ],
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/0Q0QaaBENj1Ur3e_bl8TfUiiICYPsYpq",
      accounts: [privateKey],
    },
  },
};