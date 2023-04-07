import { PropsWithChildren } from "react";
import { CommonError } from "@polkadex/orderbook/modules/types";
import { Market } from "@polkadex/orderbook-modules";
export interface PublicTrade {
  market_id: string;
  price: string;
  amount: string;
  timestamp: number;
  side?: "sell" | "buy";
}

export interface RecentTradesState {
  list: PublicTrade[];
  loading: boolean;
  currentTrade?: PublicTrade;
  lastTrade?: PublicTrade;
  error?: CommonError;
}

export type RecentTradesContextProps = RecentTradesState & {
  recentTradesFetch: (value: Market) => void;
  isDecreasing: boolean[];
  quoteUnit: string,
  baseUnit: string,
  pricePrecision: number,
  amountPrecision: number,
};

export type RecentTradesProviderProps = PropsWithChildren<{
  value: RecentTradesContextProps;
}>;
