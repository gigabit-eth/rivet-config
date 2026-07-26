import deployment from '../deployments/46630.json';
import type { NetworkConfig } from '../types';

export const robinhoodTestnet: NetworkConfig = {
  chainId: 46630,
  name: 'Robinhood Testnet',
  shortName: 'testnet',
  nativeCurrency: { name: 'Robinhood ETH', symbol: 'ETH', decimals: 18 },
  rpc: {
    public: 'https://robinhood-testnet.g.alchemy.com/v2/alch_BLEMlhuavUTqapaKKeF-O',
  },
  explorer: {
    name: 'Explorer',
    url: 'https://explorer.testnet.chain.robinhood.com/',
  },
  infra: {
    // These defaults will be used unless overridden via env vars.
    // Replace with correct cloud values if/when available.
    supabaseUrl: 'https://fkrywwkfigabsjospjdq.supabase.co',
    supabaseAnonKey: 'sb_publishable_lLNQYos8GNNC-LlBx_Aj1g_KyxAEzJ_',
    indexerSchema: 'ponder',
    apiUrl: 'https://rivet-api-production-e8d4.up.railway.app', // Placeholder
  },
  deployment: deployment as any,
};
export default robinhoodTestnet;
