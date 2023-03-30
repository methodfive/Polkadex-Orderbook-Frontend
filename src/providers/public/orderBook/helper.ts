import { OrderBookState, OrderBookDbState } from "./types";

// TODO: UNUSED_DELETE
export function getDepthFromOrderbook(data: OrderBookDbState[]): OrderBookState["depth"] {
  const bids = data
    .filter((data) => data.s === "Bid")
    ?.map((bid) => {
      return [bid.p, bid.q];
    });
  const asks = data
    .filter((data) => data.s === "Ask")
    .map((ask) => {
      return [ask.p, ask.q];
    });
  return { bids, asks };
}
