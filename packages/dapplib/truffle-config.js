require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind around hockey arctic blue snack'; 
let testAccounts = [
"0x6621fe2f7ac39be6f80f979aaf7233cba666f51d9a01c8c8a04714c219005643",
"0x00da98cba0232cea14304bf8d02f0633aff62fcf8ae8a0173f306484e6dc00bf",
"0x553edc4fab998c2395ba5fe4f4c8ca67e474997f114f3cc13a4725253969eab6",
"0x15fc37a082307188a513578dba89c575f303421a76148ed778fcfc7133c3acc5",
"0x51409c4bcd8fb6f6dad537ac47fd5db2d46a9279b1ce59b57472379f1cfe7e6a",
"0x9aaec7d7f2adab8ae7acd7d9b01aef8517a4b01965a1733f44e0cac9d3a4cd19",
"0xb4df2eb71bba6f2ecddcfa31803a9a55e99d1bdfb453c1d443238f414474b854",
"0xb9ff54afe4856f9b5a2d23fb471a8dccd15bc38d980d7113ae3ae6bf2ae29e57",
"0xa387056f9eac9838e580c8f3b228e673b6537a68212f82f2582bda878b05ea04",
"0x9837bfaecb70fa9742397cbf7c0b838f6c2744b6384a792f81b80a1496d3d8e0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
