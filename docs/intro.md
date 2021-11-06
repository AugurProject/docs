---
title: Introduction
sidebar_position: 1
slug: /
---

# The Augur Project

Augur is a decentralized prediction market Platform for Ethereum and EVM compatible chains. Originally founded in 2016, Augur has gone through massive development over the years, including three major releases.

## Projects
### Augur v1
[Augur v1](/v1) was the first attempt at a full-fledged decentralized Prediction Market platform for Ethereum, released in 2018. Augur v1 featured on-chain trading, a robust order-book based trading UI, and a local server component meant to be run by users to serve state for the client. Augur v1 was deprecated in 2020 with the launch of Augur v2.

[See resources for Augur v1](/v1)
### Augur v2
[Augur v2](/v2) was released in 2020, using DAI as the trading currency and featuring Peer-to-Peer orderbooks utilizing 0x's Mesh technology. Augur v2 is still working today, with a complex trading application for users that want the order book experience. Like v1, Augur v2 also features custom market creation for users wanting to move create arbitrary market types. Developers will notice the dropping of the "Augur Node" component, as much work was done via [Augur SDK](https://github.com/AugurProject/augur/packages/augur-sdk) to do all of the blockchain indexing work in the browser.

[See resources for Augur v2](/v2)

### Augur Turbo
[Augur Turbo](/turbo) is the most recent deployment of Augur designed specficially for recurring markets like sports, crypto, economics, and politics. Turbo offers an intuitive user interface built on top of Balancer AMMs on Polygon to leverage the nearly-zero transaction fee. Markets are automatically created and resolved at periodic intervals using Chainlink data without any user input, thus enabling daily and fast-resolving markets for sports and crypto. It uses USDC as it's trading currency and wMatic as rewards for liquidity mining.

[See resources for Augur Turbo](/turbo)

### Sportsbook
Sportsbook is a second UI for the Turbo contracts. It is designed specifially for sports bettors and attempts to simplify crypto-specific and trading-specific UX for that user. It also includes an Odds Converter to help users convert and compare odds according to their preference.

[See resources for Sportsbook](/turbo)
