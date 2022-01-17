const HDWalletProvider = require('truffle-hdwallet-provider')

const mnemonic = 'replace by mnemonic deployment account'

module.exports = {
  networks: {
    development: {      
      host: 'localhost',
      port: 7545,
      network_id: '*',
      gas: 5000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/d22bdd20244e470c9ff306d364aff464", 0),
      network_id: 4
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/d22bdd20244e470c9ff306d364aff464", 0),
      network_id: 42
    }
  }
  
}