import deployment from '../deployments/46630.json';
import type { NetworkConfig } from '../types';

export const robinhoodTestnet: NetworkConfig = {
  chainId: 46630,
  name: 'Robinhood Testnet',
  shortName: 'testnet',
  nativeCurrency: { name: 'Robinhood ETH', symbol: 'ETH', decimals: 18 },
  rpc: {
    public: 'https://rpc.testnet.chain.robinhood.com',
  },
  explorer: {
    name: 'Explorer',
    url: 'https://explorer.testnet.chain.robinhood.com/',
  },
  infra: {
    // These defaults will be used unless overridden via env vars.
    supabaseUrl: 'https://YOUR_SUPABASE_PROJECT.supabase.co',
    supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY',
    indexerSchema: 'ponder',
    apiUrl: 'https://api.yourdomain.com', // Override with env vars
  },
  deployment: deployment as any,
};
export default robinhoodTestnet;
