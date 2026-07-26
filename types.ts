export interface DeploymentManifest {
  chainId: number;
  startBlock: number;
  contracts: Record<string, string>;
}

export interface NetworkConfig {
  chainId: number;
  name: string;
  shortName: 'anvil' | 'testnet' | 'mainnet';
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpc: {
    public: string;
  };
  explorer?: {
    name: string;
    url: string;
  };
  infra: {
    supabaseUrl: string;
    supabaseAnonKey: string;
    indexerSchema: string;
    apiUrl: string;
  };
  deployment: DeploymentManifest;
}
