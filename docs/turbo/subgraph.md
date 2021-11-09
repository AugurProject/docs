---
title: Subgraph
sidebar_position: 6
---

# Augur Subgraph

A subgraph is an open API, built on top of [The Graph](https://thegraph.com/en/), that indexes
and organize blockchain data, making it accessible via [GraphQL](https://graphql.org/learn/),
which is a query language for APIs.

Our subgraph is being used on both Augur Turbo and Augur Sportsbook. It's currently indexing
Augur's markets, trades, addition and removal of liquidity and also positions.

## Available Subgraphs

There are two main subgraphs that we use. Matic is our live subgraph, used for production, and
Mumbai is our test subgraph, used by developers.

[Matic](https://thegraph.com/hosted-service/subgraph/augurproject/augur-turbo-matic)

[Mumbai](https://thegraph.com/hosted-service/subgraph/augurproject/augur-turbo-mumbai)

There's also a subgraph for staging, which is a mirror of our production subgraph,
and demo.

[Matic Staging](https://thegraph.com/hosted-service/subgraph/augurproject/augur-turbo-matic-staging)

[Mumbai Demo](https://thegraph.com/hosted-service/subgraph/augurproject/augur-turbo-demo-mumbai)

## How to deploy

For information on how to deploy, please check out [Augur's Subgraph GitHub repository](https://github.com/AugurProject/turbo/tree/dev/packages/subgraph).

## Example queries

### Markets' transactions

Trades and shares for all markets, as well as liquidity.

```graphql
{
  markets {
    trades {
      collateralBigDecimal
      sharesBigDecimal
    }
    liquidity {
      collateralBigDecimal
      sharesReturned
    }
  }
}
```

### Markets' details

To fetch market details (such as team/fighter names), you need to pick the market entity that you want.
Instead of the `Markets` entity, you can choose - at the time of this writing - the following markets:
`CryptoMarket, MlbMarket, MmaMarket, NbaMarket, NflMarket`.

Each one of those have different fields. You can click the entity in the schema section to the right,
in the playground, to see the fields.

```graphql
{
  mmaMarkets {
    marketFactory
    marketIndex
    homeFighterName
    awayFighterName
    winner
  }
}
```

### Total volume per day

```graphql
{
  totalVolumePerDays {
    id # The ID is the date in the format YYYY-MM-DD
    totalVolumeFromTrades
    totalVolumeFromLiquidity
  }
}
```

### Total volume per market, per day

```graphql
{
  totalVolumePerDaysPerMarket {
    id # The ID is the date in the format YYYY-MM-DD-marketFactory-marketIndex
    totalVolumeFromTrades
    totalVolumeFromLiquidity
  }
}
```

## Filtering

Here's an example of how to filter for specific information using GraphQL. You can find a more in depth
documentation, please check out [TheGraph's GraphQL API section](https://thegraph.com/docs/developer/graphql-api).

```graphql
{
  markets(where: {
    marketFactory: "0x00", # Filters by this market factory
    marketIndex: "0" # Filters by this market index
  }) {
    trades(where: {
      sender: "0x00" # Filters by this user's address - HAS TO BE LOWERCASED
    }) {
      collateralBigDecimal
      sharesBigDecimal
    }
    liquidity(where: {
      sender: "0x00" # Filters by this user's address - HAS TO BE LOWERCASED
    }) {
      collateralBigDecimal
      sharesReturned
    }
  }
}
```

## Pagination

By default, the subgraph playground will fetch the first 100 items. In order to make use of the
pagination system, you need to add the keywords `first` and `skip`, as listed in the example below:

```graphql
# Fetches the first 10 markets.
{
  markets(first: 10) {
    id
  }
}
```

```graphql
# Fetches 10 markets with an offset of 100,
# meaning you're fetching the register 101 all the way up to 110.
{
  markets(first: 10, skip: 100) {
    id
  }
}
```
