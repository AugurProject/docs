---
title: Getting Started
sidebar_position: 2
---

# SDK / Flask

The AugurV2 SDK was begun before good typescript wrappers existed.
So while Augur Turbo uses TypeChain and Hardhat, AugurV2 uses custom wrappers.
Below is an example of how to set up the SDK.
For more information, see the [flash scripts](https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1373) and especially the [contract-api](https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/libs/contract-api.ts).
The flash setup for contract-api is done [here](https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/flash.ts#L121).

## Flash Examples

-   Get a list of all markets: [markets](https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1930)
-   Create a new market: [new-market](https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L319)
-   Finalize a market: [finalize](https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1820)
-   Get the list of open orders for a market: [get-market-order-book](https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L859)
-   Create an order: [create-market-order](https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1041)
-   Only take an existing order: [take-order](https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L2417)
-   Report market resolution: [initial-report](https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1641)
-   Dispute market resolution: [dispute](https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1701)

## SDK Usage Example

    // Import the contract interfaces if you want typing.
    import { ContractInterfaces } from '@augurproject/core';
    import { ContractAPI } from '@augurproject/tools
    import { computeAddress } from 'ethers/utils' 
    
    // Create the wrapper for making calls.
    const privateKey = "0x123456789"; // your private key, starting with "0x"
    const account = {
      privateKey,
      address: computeAddress(privateKey)
    };
    const network = 1; // ethereum mainnet
    const config = buildConfig(network)
    const provider = await providerFromConfig(config);
    const connector = new Connectors.SingleThreadConnector();
    const user = ContractAPI.userWrapper(
      account,
      provider,
      config,
      connector
    );
    
    // Create object with typing for Market.sol ABI.
    const market: ContractInterfaces.Market = await user.getMarketContract(
      marketId
    );
    
    // Call read-only methods, which start with an underscore.
    await market._getEndTime();
    await market._isFinalized();
    
    // Call writing methods.
    await market.finalize();

