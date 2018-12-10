const path = require('path');

module.exports = {
  outputPath: path.resolve(__dirname, '../', 'public'),
  root: path.resolve(__dirname),
  template: './dist/index.html',
  favicon: './src/favicon.ico',
  api_service_url: 'http://localhost:3030/api/v1',
  app_contract_address: '0x210cd4170f609b7a9d93019918818e9e6389ee40', //ropsten
  eth_network: '3333',
  ether_scan: 'https://ropsten.etherscan.io/'
};
