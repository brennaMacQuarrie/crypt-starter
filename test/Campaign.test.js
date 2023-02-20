const assert = require('assert');
const ganache = require('ganache-cli');
const options = { gasLimit: 100000000 };
const Web3 = require('web3');
const web3 = new Web3(ganache.provider(options));

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({
            data: compiledFactory.evm.bytecode.object
        })
        .send({ from: accounts[0], gas: '10000000'});

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '10000000'
    });
    
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(
        compiledCampaign.abi,
        campaignAddress
    );
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        // you know something is deployed if it has an address :) 
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as the campaign manager', async () => {
        const managerAddress = await campaign.methods.manager().call();
        // what you want, what you got
        assert.equal(accounts[0], managerAddress);
    });

    it('allows people to contribute money and marks them as approvers', async () => {
        // contribute takes no args
        await campaign.methods.contribute().send({
            // default ganache gives us 10 accounts
            from: accounts[1],
            value: '200',
        });

        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        // assert truthy value
        assert(isContributor);
    });

    it('requires minimum contribution', async () => {
        try {
            await campaign.methods.contribute().send({
                from: addresses[3],
                value: '5'
            });
            // auto fail
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('allows a manager to make a payment request', async () => {
        await campaign.methods
            .createRequest('pay for tee shirts', 200, accounts[3]).send({
                from: accounts[0],
                gas: '10000000'
            });
        
        const request = await campaign.methods.requests(0).call();

        assert.equal('pay for tee shirts', request.description);
    });

    it('processes requests', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });

        await campaign.methods
            .createRequest('buy batteries', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({
                from: accounts[0],
                gas: '10000000'
            });

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '10000000'
        });

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '10000000'
        });

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);

        assert(balance > 104);
    });
});