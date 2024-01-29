import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import {
  DKFT20_TOKEN,
  GSUC_TOKEN,
  USDC_TOKEN,
  WETH_TOKEN,
} from './libs/constants'

// Inputs that configure this example to run
export interface ExampleConfig {
  rpc: {
    local: string
    mainnet: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
}

// Example Configuration

export const CurrentConfig: ExampleConfig = {
  rpc: {
    local: 'http://localhost:8545',
    // mainnet: 'https://eth.llamarpc.com',
    mainnet: 'https://rpc.ankr.com/eth_goerli',
  },
  tokens: {
    in: DKFT20_TOKEN,
    // in: USDC_TOKEN,
    // in: GSUC_TOKEN,
    poolFee: FeeAmount.LOW,
    amountIn: 50,
    out: WETH_TOKEN,
  },
}
