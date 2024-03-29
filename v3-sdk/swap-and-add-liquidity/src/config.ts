import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import {
  DAI_TOKEN,
  DKFT20_TOKEN,
  USDC_TOKEN,
  WETH_TOKEN,
} from './libs/constants'

// Sets if the example should run locally or on chain
export enum Environment {
  LOCAL,
  WALLET_EXTENSION,
  MAINNET,
}

// Inputs that configure this example to run
export interface ExampleConfig {
  env: Environment
  rpc: {
    local: string
    mainnet: string
  }
  wallet: {
    address: string
    privateKey: string
  }
  tokens: {
    token0: Token
    token0Amount: number
    token1: Token
    token1Amount: number
    poolFee: FeeAmount
    token0AmountToAdd: number
    token1AmountToAdd: number
  }
}

// Example Configuration

export const CurrentConfig: ExampleConfig = {
  env: Environment.LOCAL,
  rpc: {
    local: 'http://localhost:8545',
    // mainnet: '',
    mainnet: 'https://rpc.ankr.com/eth_goerli',
  },
  wallet: {
    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    privateKey:
      '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
  },
  tokens: {
    token0: DKFT20_TOKEN,
    token0Amount: 50,
    token1: WETH_TOKEN,
    token1Amount: 0.0003,
    poolFee: FeeAmount.LOW,
    token0AmountToAdd: 50,
    token1AmountToAdd: 0,
  },
}
