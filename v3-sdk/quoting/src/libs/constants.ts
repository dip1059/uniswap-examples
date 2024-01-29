// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { SupportedChainId, Token } from '@uniswap/sdk-core'

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  '0x1F98431c8aD98523631AE4a59f267346ea31F984'
export const QUOTER_CONTRACT_ADDRESS =
  '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6'

// Currencies and Tokens

export const WETH_TOKEN = new Token(
  // SupportedChainId.MAINNET,
  // '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  SupportedChainId.GOERLI,
  '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
  18,
  'WETH',
  'Wrapped Ether'
)

export const DKFT20_TOKEN = new Token(
  SupportedChainId.GOERLI,
  '0x2b669B8dF849a250CB3D228C80CcF21D02F4C5dF',
  18,
  'DKFT20',
  'DK Free Token'
)

export const GSUC_TOKEN = new Token(
  SupportedChainId.GOERLI,
  '0x252D98faB648203AA33310721bBbDdfA8F1b6587',
  18,
  'GSUc',
  'GSU Coin'
)

export const USDC_TOKEN = new Token(
  SupportedChainId.MAINNET,
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  6,
  'USDC',
  'USD//C'
)
