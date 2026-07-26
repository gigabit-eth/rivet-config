import { anvil } from './anvil';
import { robinhoodTestnet } from './robinhood-testnet';
import { robinhoodMainnet } from './robinhood-mainnet';
import type { NetworkConfig } from '../types';

const NETWORKS: Record<number, NetworkConfig> = {
  31337: anvil,
  46630: robinhoodTestnet,
  4663: robinhoodMainnet,
};

export const SUPPORTED_CHAIN_IDS = [31337, 46630, 4663] as const;

export function getNetwork(chainId: number): NetworkConfig {
  const net = NETWORKS[chainId];
  if (!net) throw new Error(`Unsupported chain: ${chainId}`);
  return net;
}

export function getAllNetworks(): NetworkConfig[] {
  return Object.values(NETWORKS);
}

export function getDeployment(chainId: number) {
  return getNetwork(chainId).deployment;
}

export { anvil, robinhoodTestnet, robinhoodMainnet };
