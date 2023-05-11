import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

import * as S from "./styles";

import { Menu } from "@polkadex/orderbook-ui/organisms";
import {
  Checkbox,
  EmptyData,
  EmptyMyAccount,
  Footer,
  Icon,
  ResultFound,
  Search,
  Table,
} from "@polkadex/orderbook-ui/molecules";
import { toCapitalize } from "@polkadex/web-helpers";
import { useProfile } from "@polkadex/orderbook/providers/user/profile";
import { useAssetsProvider } from "@polkadex/orderbook/providers/public/assetsProvider/useAssetsProvider";
import { useBalancesProvider } from "@polkadex/orderbook/providers/user/balancesProvider/useBalancesProvider";

export const BalancesTemplate = () => {
  const [filters, setFilters] = useState({ search: "", hideZero: false });

  const { list } = useAssetsProvider();
  const { balances: userBalances } = useBalancesProvider();
  const profileState = useProfile();

  const userHasSelectedAccount = !!Object?.keys(profileState.selectedAccount?.mainAddress)
    ?.length;

  const allAssets = useMemo(
    () =>
      list?.filter((e) => {
        const tokenBalance = userBalances?.find((value) => value.assetId === e.assetId);
        // TODO: Define small amount based on the decimals of the token.
        const hasZeroAmount = filters.hideZero && Number(tokenBalance?.free_balance) < 0.001;
        const matchesNameOrTicker =
          e.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          e.symbol.toLowerCase().includes(filters.search.toLowerCase());

        return matchesNameOrTicker && !hasZeroAmount;
      }),
    [filters.search, list, userBalances, filters.hideZero]
  );
  return (
    <>
      <Head>
        <title>Balances | Polkadex Orderbook</title>
        <meta name="description" content="A new era in DeFi" />
      </Head>
      <S.Main>
        <Menu />
        <S.Wrapper>
          <S.ContainerMain>
            <S.Title>
              <h1>Balances.</h1>
            </S.Title>
            <S.Container>
              {userHasSelectedAccount ? (
                <>
                  <S.Header>
                    <h2>Overview</h2>
                    <S.HeaderBox>
                      <Search
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                        isFull
                        placeholder="Search"
                      />
                      <Checkbox
                        checked={filters.hideZero}
                        onChange={() =>
                          setFilters({ ...filters, hideZero: !filters.hideZero })
                        }>
                        Hide small balances
                      </Checkbox>
                    </S.HeaderBox>
                  </S.Header>
                  <S.Content>
                    {allAssets?.length ? (
                      <Table aria-label="Polkadex assets" style={{ width: "100%" }}>
                        <Table.Header fill="none">
                          <Table.Column>
                            <S.Column style={{ paddingLeft: 10 }}>Name</S.Column>
                          </Table.Column>
                          <Table.Column>
                            <S.Column>Available</S.Column>
                          </Table.Column>
                          <Table.Column>
                            <S.Column>Locked</S.Column>
                          </Table.Column>
                          <Table.Column>
                            <S.Column>In Orders</S.Column>
                          </Table.Column>
                          <Table.Column>
                            <S.Column>Actions</S.Column>
                          </Table.Column>
                        </Table.Header>
                        <Table.Body striped>
                          {allAssets?.map((item) => {
                            const balance = userBalances?.find(
                              (value) => value.assetId === item.assetId
                            );
                            return (
                              <Table.Row key={item.assetId}>
                                <Table.Cell>
                                  <S.CellFlex>
                                    <S.TokenIcon>
                                      <Icon isToken name={item.symbol} size="extraSmall" />
                                    </S.TokenIcon>
                                    <S.Cell>
                                      <span>
                                        {toCapitalize(item.name)} <small> {item.symbol}</small>
                                      </span>
                                    </S.Cell>
                                  </S.CellFlex>
                                </Table.Cell>
                                <Table.Cell>
                                  <S.Cell>
                                    <span>
                                      {Number(balance?.free_balance || 0).toFixed(8)}{" "}
                                    </span>
                                  </S.Cell>
                                </Table.Cell>
                                <Table.Cell>
                                  <S.Cell>
                                    <span>
                                      {Number(balance?.reserved_balance || 0).toFixed(8)}{" "}
                                    </span>
                                  </S.Cell>
                                </Table.Cell>
                                <Table.Cell>
                                  <S.Cell>
                                    <span>
                                      {Number(balance?.reserved_balance || 0).toFixed(8)}{" "}
                                    </span>
                                  </S.Cell>
                                </Table.Cell>
                                <Table.Cell>
                                  <S.Actions>
                                    <Link href={`/deposit/${item.symbol}`}>
                                      <S.DepositLink>Deposit</S.DepositLink>
                                    </Link>
                                    <Link href={`/withdraw/${item.symbol}`}>
                                      <S.WithdrawLink>Withdraw</S.WithdrawLink>
                                    </Link>
                                  </S.Actions>
                                </Table.Cell>
                              </Table.Row>
                            );
                          })}
                        </Table.Body>
                      </Table>
                    ) : (
                      <ResultFound />
                    )}
                  </S.Content>
                </>
              ) : (
                <EmptyMyAccount hasLimit {...connectWalletData} />
              )}
            </S.Container>
          </S.ContainerMain>
          <Footer />
        </S.Wrapper>
      </S.Main>
    </>
  );
};

const connectWalletData = {
  image: "emptyWallet",
  title: "Connect your Trading Account",
  description: "Import your existing account, or create a new account",
  primaryLink: "/createAccount",
  primaryLinkTitle: "Create Account",
  secondaryLink: "/settings",
  secondaryLinkTitle: "Select Account",
};
