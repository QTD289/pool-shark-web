const path = require('path');

module.exports = {
  outputPath: path.resolve(__dirname, '../', 'public'),
  root: path.resolve(__dirname),
  template: './dist/index.html',
  favicon: './src/favicon.ico',
  api_service_url: 'https://rth-pool-shark-api.herokuapp.com/api/v1',
  app_contract_address: '0x8E41b6c00Ac5b413150b0bfdaF76b52e4Dc1AC03', //ropsten
  eth_network: '3',
  ether_scan: 'https://ropsten.etherscan.io/'
};
