const Web3 = require("web3");
const web3 = new Web3("http://localhost:7545");

const contractAbi = require("../contractABI.json");

function createContractInstance(contractAddress) {
  return new web3.eth.Contract(contractAbi, contractAddress);
}

module.exports = createContractInstance;
