import deployment from '../deployments/4663.json';
import type { NetworkConfig } from '../types';

export const robinhoodMainnet: NetworkConfig = {
  chainId: 4663,
  name: 'Robinhood Chain',
  shortName: 'mainnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpc: {
    public: 'https://rpc.mainnet.chain.robinhood.com',
  },
  infra: {
    indexerSchema: 'mainnet_indexer',
    apiUrl: 'https://api.yourdomain.com', // Override with env vars
  },
  deployment: deployment as any,
};
export default robinhoodMainnet;
