// https://eth-ropsten.alchemyapi.io/v2/0F9J29VIKLcuyR25jfAObWZswkNZ1Mxl

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url : 'https://eth-ropsten.alchemyapi.io/v2/0F9J29VIKLcuyR25jfAObWZswkNZ1Mxl',
      accounts : ['b2ad640cb38d320f5431829c380fb4d373cffe0a926698c4cf6e16b280ccbb55']
    }
  }
}