// ? Check Header Rerender
import * as S from "./styles";

import { Logo, ThemeSwitch, Dropdown } from "src/ui/molecules";
import { Toolbar, MyAccountContent, MyAccountHeader, SignContent } from "src/ui/organisms";
import { Button, Decimal } from "src/ui/components";
import { useReduxSelector } from "src/hooks";
import {
  selectCurrentMarket,
  selectMarkets,
  selectMarketTickers,
  selectUserInfo,
} from "src/modules";

const defaultTicker = {
  amount: 0,
  low: 0,
  last: 0,
  high: 0,
  volume: 0,
  price_change_percent: "+0.00%",
};

export const Header = () => {
  const currentMarket = useReduxSelector(selectCurrentMarket);
  const marketTickers = useReduxSelector(selectMarketTickers);
  const markets = useReduxSelector(selectMarkets);
  const user = useReduxSelector(selectUserInfo);

  const getTickerValue = (value: string) =>
    (marketTickers[currentMarket?.id] || defaultTicker)[value];
  const bidUnit = currentMarket?.quote_unit?.toUpperCase();
  const isPositive = /\+/.test(getTickerValue("price_change_percent"));
  const tempAddr = "FbQGLXk3NGpBE6o35K6Ddgk1aiqVKabhk1xJESGYbVrx9jQ";
  return (
    <S.Wrapper>
      <S.Container>
        <S.Column>
          <Logo />
          <Toolbar
            currentMarket={currentMarket}
            markets={markets}
            lastPrice={`${Decimal.format(
              Number(getTickerValue("last")),
              currentMarket?.price_precision,
              ","
            )} ${bidUnit || ""}`}
            currentPrice={
              (marketTickers[currentMarket?.id] || defaultTicker).price_change_percent
            }
            color={isPositive ? "green" : "red"}
            volume={`${Decimal.format(
              Number(getTickerValue("volume")),
              currentMarket?.price_precision,
              ","
            )} ${bidUnit || ""}`}
            changeLow={`${Decimal.format(
              Number(getTickerValue("low")),
              currentMarket?.price_precision,
              ","
            )} ${bidUnit || ""}`}
            changeHigh={`${Decimal.format(
              Number(getTickerValue("high")),
              currentMarket?.price_precision,
              ","
            )} ${bidUnit || ""}`}
          />
        </S.Column>
        <S.Column>
          <ThemeSwitch />
          {user.address ? (
            <Dropdown
              isOpacity
              variant={2}
              style={{ top: 0 }}
              title={<MyAccountHeader accountName={user.username} address={user.address} />}
              direction="bottom">
              <MyAccountContent accountName={user.username} address={user.address} />
            </Dropdown>
          ) : (
            <Dropdown
              isOpacity
              style={{ top: 0 }}
              title={<Button title="Connect to a Wallet" />}
              direction="bottomLeft"
              variant={2}>
              <SignContent />
            </Dropdown>
          )}
        </S.Column>
      </S.Container>
    </S.Wrapper>
  );
};
//
