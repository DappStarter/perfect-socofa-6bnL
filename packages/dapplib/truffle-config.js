require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth soap unaware hunt credit equal ghost'; 
let testAccounts = [
"0x046311cff570e3ee5e12a3e6534622d50c18a8566b7f1027af4fbe5f595c9a61",
"0x176b44d735f456fc4e49a3431b995f00aa37274682b4e9253958363ac0982642",
"0x704c5825500044e99aa2fed93286e7ffc95eb55a0e56219123ae0df8bbe0e1b0",
"0x9a4c06e1b94462be57d26774fad74280f45fb27d8aae55e8e7fe47cde72b3ee1",
"0x0cc1ee3deab62cea7f6456e2c9d531dcd705a255aa283d6aaa78fac56bf0abf3",
"0x9b9a9e89b77f942dbbf777c641370190fe87a0212af482d5cd9f162096b5535e",
"0xbd1ef86922585c3538c41d120f39a3332c6fc393008e6ebc19fb0ccfe7567651",
"0x18cf8848610a3256655263544ecbee5ceaa40b53e9708abdfc908bb6f61c6a3e",
"0x79aa29658dfe7a7589e2b0654ac569c6f03c6f7332bb8e3f8fdf72b7378d6787",
"0xdda1c3a8bc6d78a81ddbe36ebd4494358d374ba291d9066d5f167332c15256f1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

