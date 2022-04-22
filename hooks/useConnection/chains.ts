import { getValueBasedOnEnv } from "../../utils/env";

// Required types
type NativeCurrency = {
    symbol: string;
    decimals: number;
    name: string;
}

type ChainInfo = {
    urls: Array<string | undefined>;
    name: string;
    nativeCurrency?: NativeCurrency;
    blockExplorerUrls?: Array<string>;
}

// Native currencies
const ETH: NativeCurrency = {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
}

const MATIC: NativeCurrency = {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
}

/**
 * @summary Mapping between chainIDs and their RPC urls, name, symbol, etc, only for Testnets
 */
export const CHAINS_TEST: { [chainId: number]: ChainInfo } = {
    3: {
        urls: [`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`],
        name: 'Ropsten',
    },
    4: {
        urls: [`https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`],
        name: 'Rinkeby',
    },
    5: {
        urls: [`https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`],
        name: 'Görli',
    },
    42: {
        urls: [`https://kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`],
        name: 'Kovan',
    },
    69: {
        urls: [
            `https://optimism-kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
            'https://kovan.optimism.io',
        ],
        name: 'Optimism Kovan',
        nativeCurrency: ETH,
        blockExplorerUrls: ['https://kovan-optimistic.etherscan.io'],
    },
    421611: {
        urls: [
            `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
            'https://rinkeby.arbitrum.io/rpc',
        ],
        name: 'Arbitrum Testnet',
        nativeCurrency: ETH,
        blockExplorerUrls: ['https://testnet.arbiscan.io'],
    },
    80001: {
        urls: [`https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`],
        name: 'Polygon Mumbai',
        nativeCurrency: MATIC,
        blockExplorerUrls: ['https://mumbai.polygonscan.com'],
    }
}

/**
 * @summary Mapping between chainIDs and their RPC urls, name, symbol, etc, only for Mainnets
 */
export const CHAINS_MAIN: { [chainId: number]: ChainInfo } = {
    1: {
        urls: [`https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`],
        name: 'Mainnet',
    },
    10: {
        urls: [`https://optimism-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`],
        name: 'Optimism',
        nativeCurrency: ETH,
        blockExplorerUrls: ['https://optimistic.etherscan.io'],
    },
    42161: {
        urls: [
            `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
            'https://arb1.arbitrum.io/rpc',
        ],
        name: 'Arbitrum One',
        nativeCurrency: ETH,
        blockExplorerUrls: ['https://arbiscan.io'],
    },
    137: {
        urls: [
            `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
            'https://polygon-rpc.com',
        ],
        name: 'Polygon Mainnet',
        nativeCurrency: MATIC,
        blockExplorerUrls: ['https://polygonscan.com'],
    }
}

/**
 * @summary Returns chains based on the deployment URL
 * @returns Mapping between chain ids and the chain details like name, rpc urls, etc
 */
export const getChainsBasedOnEnv = (): { [chainId: number]: ChainInfo } => getValueBasedOnEnv({
    local: CHAINS_TEST,
    development: CHAINS_TEST,
    production: CHAINS_MAIN
});

/**
 * @summary Returns mapping between chainIDs and their RPC url
 * @returns Mapping between chainIDs and array of RPC url
 */
export const getRpcUrls = (): { [chainId: number]: string } => {
    const rpcUrls: { [chainId: number | string]: string } = {};
    const chains = getValueBasedOnEnv({
        local: CHAINS_TEST,
        development: CHAINS_TEST,
        production: CHAINS_MAIN
    });

    Object.keys(chains).forEach((chainId) => {
        rpcUrls[chainId] = chains[parseInt(chainId)].urls[0] as string;
    });

    return rpcUrls;
}  