import * as S from "./styles";

import { Decimal } from "@polkadex/orderbook-ui/atoms";
import { OrderCommon } from "@polkadex/orderbook/providers/types";
import { EmptyData, OpenOrderCard } from "@polkadex/orderbook-ui/molecules";
import { useAssetsProvider } from "@polkadex/orderbook/providers/public/assetsProvider/useAssetsProvider";
import { useMarketsProvider } from "@polkadex/orderbook/providers/public/marketsProvider/useMarketsProvider";

export const OpenOrders = ({ orderHistory }) => {
  const { openOrders } = orderHistory;
  const { currentMarket } = useMarketsProvider();
  const priceFixed = currentMarket.quote_precision;
  const amountFixed = currentMarket.base_precision;

  const { selectGetAsset } = useAssetsProvider();
  return (
    <S.Wrapper>
      {openOrders?.length ? (
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>Pair</S.Th>
              <S.Th>Date</S.Th>
              <S.Th>Type</S.Th>
              <S.Th>Price</S.Th>
              <S.Th>Total</S.Th>
              <S.Th>Filled</S.Th>
              <S.Th />
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {openOrders &&
              openOrders.map((order: OrderCommon, i) => {
                const [base, quote] = order.m.split("-");
                const date = new Date(order.time).toLocaleString();
                const isSell = order.side === "Ask";
                const isMarket = order.order_type === "MARKET";
                const baseUnit = selectGetAsset(base)?.symbol;
                const quoteUnit = selectGetAsset(quote)?.symbol;
                const avgPrice = order.avg_filled_price;
                return (
                  <OpenOrderCard
                    key={i}
                    isSell={isSell}
                    orderId={order.id}
                    base={base}
                    quote={quote}
                    orderSide={order.side}
                    orderType={order.order_type}
                    baseUnit={baseUnit}
                    quoteUnit={quoteUnit}
                    data={[
                      { value: date },
                      { value: order.order_type },
                      { value: order.status },
                      { value: isMarket ? "-" : Decimal.format(order.price, priceFixed, ",") },
                      { value: Decimal.format(order.qty, amountFixed, ",") },
                      { value: Decimal.format(order.filled_quantity, amountFixed, ",") },
                      {
                        value: Decimal.format(avgPrice, priceFixed, ","),
                      },
                    ]}
                  />
                );
              })}
          </S.Tbody>
        </S.Table>
      ) : (
        <S.EmptyWrapper>
          <EmptyData />
        </S.EmptyWrapper>
      )}
    </S.Wrapper>
  );
};
