import deployment from '../deployments/4663.json';
import type { NetworkConfig } from '../types';

export const robinhoodMainnet: NetworkConfig = {
  chainId: 4663,
  name: 'Robinhood Chain',
  shortName: 'mainnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpc: {
    public: 'https://robinhood-mainnet.g.alchemy.com/v2/alch_BLEMlhuavUTqapaKKeF-O',
  },
  infra: {
    supabaseUrl: 'https://fkrywwkfigabsjospjdq.supabase.co',
    supabaseAnonKey: 'sb_publishable_lLNQYos8GNNC-LlBx_Aj1g_KyxAEzJ_',
    indexerSchema: 'indexer_prod',
    apiUrl: 'https://rivet-api-production-e8d4.up.railway.app', // Placeholder
  },
  deployment: deployment as any,
};
export default robinhoodMainnet;
