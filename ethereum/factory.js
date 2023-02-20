import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x64d5331D4B719a38102d2c2a1646e3022b222170'
);

export default instance;
