import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { createContext, useCallback, useContext, useState } from "react";

export interface SolanaAuthState {
  isAuthenticated: boolean;
  data: Record<string, string>;
  authenticate(): void;
  publicKey: PublicKey | null;
}

export const SolanaAuthContext = createContext<SolanaAuthState>(
  {} as SolanaAuthState
);

export const useSolanaSignIn = () => {
  return useContext(SolanaAuthContext);
};