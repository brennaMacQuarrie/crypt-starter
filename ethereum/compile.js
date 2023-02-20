// we want to compile once, save to a file in our directory
// so we dont have to keep compiling
const path = require('path');
const solc = require('solc');
// file system module with helpers
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
// removeSync is part of fs-EXTRA. Not part of default
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8')

const input = {
    language: 'Solidity',
    sources: {
      'Campaign': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts.Campaign;
// recreate 'build' dir
fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract + '.json'),
        output[contract]
    )
}
