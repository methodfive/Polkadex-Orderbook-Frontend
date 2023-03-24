import { useReduxSelector } from "@polkadex/orderbook-hooks";
import { selectCurrentMarket } from "@polkadex/orderbook-modules";
import { getIsDecreasingArray } from "@polkadex/web-helpers";
import { stat } from "fs";
import { useContext, useEffect } from "react";

import { Context } from "./context";

export function useRecentTradesProvider() {
  const state = useContext(Context);

  if (!Context) {
    const error = new Error("Recent trades context is undefined");
    error.name = "ContextError";
    Error?.captureStackTrace?.(error, useContext);
    throw error;
  }

  return {
    state,
  };
}
