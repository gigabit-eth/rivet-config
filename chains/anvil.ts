import deployment from '../deployments/31337.json';
import type { NetworkConfig } from '../types';

export const anvil: NetworkConfig = {
  chainId: 31337,
  name: 'Foundry (Anvil)',
  shortName: 'anvil',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpc: {
    public: 'http://127.0.0.1:8545',
  },
  infra: {
    supabaseUrl: 'http://127.0.0.1:54321',
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',
    indexerSchema: 'ponder',
    apiUrl: 'http://localhost:3001',
  },
  deployment: deployment as any,
};
export default anvil;
