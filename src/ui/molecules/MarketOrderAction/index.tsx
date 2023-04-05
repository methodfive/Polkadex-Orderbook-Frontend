import Link from "next/link";
import { useMemo } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import * as S from "./styles";

import {
  Icon,
  ButtonStatus,
  LoadingSection,
  MarketInput,
  PassCode,
  SliderPercentage,
} from "@polkadex/orderbook-ui/molecules";
import { usePlaceOrder, useTryUnlockTradeAccount } from "@polkadex/orderbook/hooks";
import { Decimal, Icons } from "@polkadex/orderbook-ui/atoms";
import { selectTradeAccount } from "@polkadex/orderbook/providers/user/tradeWallet/helper";
import { useProfile } from "@polkadex/orderbook/providers/user/profile";
import { useTradeWallet } from "@polkadex/orderbook/providers/user/tradeWallet";

export const MarketOrderAction = ({ isSell = false, isLimit }) => {
  const {
    changeAmount,
    changePrice,
    updateRange,
    handleSliderClick,
    rangeValue,
    price,
    total,
    amount,
    executeOrder,
    isOrderLoading,
    availableAmount,
    quoteTicker,
    baseTicker,
    orderSide,
    hasUser,
    isSignedIn,
    isOrderExecuted,
    showProtectedPassword,
    slider,
  } = usePlaceOrder(isSell, isLimit);

  return (
    <S.WrapperOrder>
      {showProtectedPassword ? (
        <ProtectPassword />
      ) : (
        <>
          <S.ContainerWallet>
            <Icon
              name="Wallet"
              background="primaryBackgroundOpacity"
              size="extraLarge"
              stroke="text"
            />
            <S.WrapperBalance>
              <small>Available</small>
              <S.Span>
                <Decimal fixed={8} hasStyle={false}>
                  {availableAmount}
                </Decimal>{" "}
                {isSell ? baseTicker : quoteTicker}
              </S.Span>
            </S.WrapperBalance>
          </S.ContainerWallet>
          <S.ContainerForm>
            <form onSubmit={executeOrder}>
              {isLimit && (
                <MarketInput
                  label="Price"
                  icon="Price"
                  inputInfo={quoteTicker}
                  fullWidth={true}
                  type="text"
                  placeholder="0.000000000"
                  id="order-price"
                  value={price}
                  autoComplete="off"
                  onChange={(e) => changePrice(e.currentTarget.value)}
                  disabled={isOrderLoading}
                />
              )}
              <MarketInput
                label="Amount"
                icon="Amount"
                inputInfo={isLimit ? baseTicker : isSell ? baseTicker : quoteTicker}
                fullWidth={true}
                type="text"
                placeholder="0.000000000"
                id="order-amount"
                value={amount}
                autoComplete="off"
                onChange={(e) => changeAmount(e.currentTarget.value)}
                disabled={isOrderLoading}
              />
              <S.SliderWrapper>
                {slider.map((data, index) => (
                  <SliderPercentage
                    {...data}
                    key={index}
                    isDisabled={false}
                    handleOnClick={handleSliderClick}
                  />
                ))}
              </S.SliderWrapper>

              {isLimit && (
                <MarketInput
                  label="Total"
                  inputInfo={isLimit ? quoteTicker : isSell ? quoteTicker : baseTicker}
                  fullWidth={true}
                  type="text"
                  defaultValue={total}
                  placeholder={isLimit ? "Total" : "Estimated Amount"}
                  autoComplete="off"
                  disabled={isOrderLoading}
                  readOnly
                />
              )}
              {hasUser ? (
                <ButtonStatus
                  isSell={isSell}
                  heading={{
                    text: !isSignedIn
                      ? "Sign In to Place Order"
                      : `${orderSide} ${baseTicker}`,
                    loading: "Waiting",
                    success: "Order Created",
                  }}
                  isLoading={isOrderLoading}
                  isSuccess={isOrderExecuted}
                  type="submit"
                  disabled={!hasUser || !isSignedIn}
                />
              ) : (
                <Link href="/settings">
                  <S.Connect>Connect Trading Account</S.Connect>
                </Link>
              )}
            </form>
          </S.ContainerForm>
        </>
      )}
    </S.WrapperOrder>
  );
};

const ProtectPassword = () => {
  const dispatch = useDispatch();
  const profileState = useProfile();
  const tradeWalletState = useTradeWallet();
  const currTradeAddr = profileState.selectedAccount.tradeAddress;
  const tradeAccount = selectTradeAccount(currTradeAddr, tradeWalletState.allBrowserAccounts);
  // if account is not protected by password use default password to unlock account.
  useTryUnlockTradeAccount(tradeAccount);

  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      showPassword: false,
      password: "",
    },
    onSubmit: (values) => {
      isValidSize &&
        tradeAccount.isLocked &&
        tradeWalletState.onUnlockTradeAccount({
          address: currTradeAddr,
          password: values.password,
        });
    },
  });

  const isLoading = false;
  const error = "";

  const isValidSize = useMemo(() => values?.password?.length === 5, [values.password]);
  return (
    <LoadingSection isActive={isLoading} color="transparent">
      <form onChange={handleSubmit}>
        <S.ProtectPassword>
          <S.ProtectPasswordTitle>
            <span>Input 5-digit trading password</span>
            <S.Show
              type="button"
              onClick={() => setFieldValue("showPassword", !values.showPassword)}>
              {values.showPassword ? <Icons.Hidden /> : <Icons.Show />}
            </S.Show>
          </S.ProtectPasswordTitle>
          <S.ProtectPasswordContent>
            <PassCode
              numInputs={5}
              onChange={(e) => setFieldValue("password", e)}
              value={values.password}
              name="password"
              error={error.length && error}
              type={values.showPassword ? "password" : "tel"}
            />
          </S.ProtectPasswordContent>
        </S.ProtectPassword>
      </form>
    </LoadingSection>
  );
};
