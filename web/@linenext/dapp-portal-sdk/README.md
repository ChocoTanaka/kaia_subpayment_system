# Dapp Portal SDK

WalletProvider, one of the features provided in the Mini Dapp SDK, is available to anyone upon request. You can apply through this [link](https://tally.so/r/D4BNjp).
## Quick start
### Create a Project
Prepare the provided `clientId`. The SDK operates only on pre-approved host addresses.

### Install the SDK
Add the Dapp Portal SDK to your project by entering the following command:
```bash
npm install @linenext/dapp-portal-sdk
```
or
```bash
yarn add @linenext/dapp-portal-sdk
```

### Sign a Transaction
Initialize the SDK with the clientId confirmed during the project creation step, and obtain a WalletProvider.
```typescript
import DappPortalSDK from '@linenext/dapp-portal-sdk'

const sdk = await DappPortalSDK.init({ clientId: '<CLIENT_ID>' });
const provider = sdk.getWalletProvider()
```
If you wish to use the mainnet, initialize the SDK with chainId 

*default : testnet (1001)
```typescript
const sdk = await DappPortalSDK.init({
  clientId: '<CLIENT_ID>',
  chainId: '8217',
});
```

Send a `kaia_requestAccounts` request to the wallet to check the address of the connected wallet. During this process, the user will see a screen to select the wallet type and confirm the connection.
```typescript
const accounts = await provider.request({ method: 'kaia_requestAccounts' });
const accountAddress = accounts[0]
```

Create a transaction that requires the user's signature. The address used in the from field should match the wallet address obtained in the previous step.
```typescript
const tx = {
    from: accountAddress,
    to: '0xBBBBBBBBBBBB',
    value: '10',
    gas: '21000',
};
```

Send a `kaia_sendTransaction` request to the wallet. During this process, a popup will open for the user to verify the transaction to be signed. If successful, it returns the Tx hash.
```typescript
const txHash = await provider.request({method: 'kaia_sendTransaction', params: [tx]});
```

### Connect and Sign a Message
You can use the `kaia_connectAndSign` method to connect to a wallet and sign a message in a single step. This method simplifies the process by combining wallet connection and message signing.
```typescript
const [address, signature] = await provider.request({method: 'kaia_connectAndSign', params: [someMessage]});
```

## Compatible Libraries
- https://docs.kaia.io/ko/references/sdk/ethers-ext/getting-started/
- https://docs.kaia.io/ko/references/sdk/web3js-ext/getting-started/
- https://docs.kaia.io/ko/references/sdk/caver-js/
