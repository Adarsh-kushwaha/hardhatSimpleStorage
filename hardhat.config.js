require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */

const rpc_url = process.env.RINKEBY_RPC_URL;
const private_key = process.env.PRIVATE_KEY;
const etherscan_Api_Key = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.17",
  etherscan: {
    apikey: etherscan_Api_Key,
  },
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: rpc_url,
      account: [private_key],
      chainId: 4,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  }
};
