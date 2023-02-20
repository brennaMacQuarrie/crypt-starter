const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
require('dotenv').config();

const compiledFactory = require('../ethereum/build/CampaignFactory.json');

provider = new HDWalletProvider(
  process.env.MNEMONIC,
  `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`
);

const web3 = new Web3(provider);

const deploy = async () => {
  // always async await for web3
  const accounts = await web3.eth.getAccounts();
  const gas = 10000000;
  const gasPrice = web3.utils.toWei('2', 'gwei');

  console.log('Attempting to deploy from account', accounts[0]);

  // result returned will be hash address of instance 
  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: '0x' + compiledFactory.evm.bytecode.object })
    .send({ gas, gasPrice, from: accounts[0] })
    .catch(() => console.log('Contract NOT deployed.'));

  console.log('Contract deployed to', result._address);
  provider.engine.stop();
};
deploy();
