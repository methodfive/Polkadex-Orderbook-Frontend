import { useCallback, useEffect, useReducer } from "react";
import { API, Auth } from "aws-amplify";

import { useAuth } from "../auth";
import { useSettingsProvider } from "../../public/settings";

import { Provider } from "./context";
import { initialState, profileReducer } from "./reducer";
import * as T from "./types";
import * as A from "./actions";

import { LOCAL_STORAGE_ID } from "@polkadex/web-constants";
import { sendQueryToAppSync } from "@polkadex/orderbook/helpers/appsync";
import * as queries from "@polkadex/orderbook/graphql/queries";

export const ProfileProvider: T.ProfileComponent = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const { onUserAuth, signin, logout } = useAuth();
  const { onHandleNotification, onHandleError } = useSettingsProvider();

  const onUserSelectAccount = useCallback(
    (payload: T.UserSelectAccount) => {
      const { tradeAddress: trade_address } = payload;
      try {
        const mainAddress = state.userData?.userAccounts?.find(
          ({ tradeAddress }) => trade_address === tradeAddress
        )?.mainAddress;
        if (mainAddress) {
          const data = { tradeAddress: trade_address, mainAddress };
          dispatch(A.userSetDefaultTradeAccount(trade_address));
          dispatch(A.userAccountSelectData(data));
        }
      } catch (e) {
        console.log("error: ", e);
        onHandleError(`Invalid funding account, ${e?.message ?? e}`);
      }
    },
    [onHandleError, state.userData?.userAccounts]
  );

  const getAllMainLinkedAccounts = useCallback(
    async (email: string, Api = API) => {
      try {
        const res = await sendQueryToAppSync({
          query: queries.listMainAccountsByEmail,
          variables: {
            email,
          },
          token: null,
          authMode: "AMAZON_COGNITO_USER_POOLS",
          API: Api,
        });
        return res.data.listMainAccountsByEmail ?? { accounts: [] };
      } catch (error) {
        console.log("Error: getAllMainLinkedAccounts", error.errors);
        onHandleError(`Fet all linked accounts error: ${error?.message ?? error}`);
      }
    },
    [onHandleError]
  );

  const getAllProxyAccounts = async (
    mainAccounts: [string],
    Api = API
  ): Promise<T.UserAccount[]> => {
    const promises = mainAccounts.map(async (main_account) => {
      try {
        const res = await sendQueryToAppSync({
          query: queries.findUserByMainAccount,
          variables: { main_account },
          API: Api,
        });
        const proxies = res.data.findUserByMainAccount.proxies ?? [];
        return { main_account, proxies };
      } catch (error) {
        console.log("Error: getAllProxyAccounts", error.errors);
        return { main_account, proxies: [] };
      }
    });
    const list = await Promise.all(promises);
    const accounts: T.UserAccount[] = [];
    list.forEach((item) => {
      item.proxies.forEach((proxy) => {
        accounts.push({ mainAddress: item.main_account, tradeAddress: proxy });
      });
    });
    return accounts;
  };

  const onUserAuthentication = useCallback(
    async (payload: T.UserAuth) => {
      const { email, isConfirmed, isAuthenticated, userExists, jwt } = payload;
      dispatch(A.userAuthData({ isAuthenticated, userExists, jwt }));

      const userAccounts = state.userData?.userAccounts;
      const defaultTradeAddress = window.localStorage.getItem(
        LOCAL_STORAGE_ID.DEFAULT_TRADE_ACCOUNT
      );

      try {
        let mainAddress: string | null;
        if (!userAccounts?.length) {
          const { accounts } = await getAllMainLinkedAccounts(email);
          const userAccounts = await getAllProxyAccounts(accounts);

          mainAddress = userAccounts?.find(
            ({ tradeAddress }) => defaultTradeAddress === tradeAddress
          )?.mainAddress;

          dispatch(A.userData({ mainAccounts: accounts, userAccounts }));
        }

        if (defaultTradeAddress?.length) {
          dispatch(A.userSetDefaultTradeAccount(defaultTradeAddress));
          dispatch(
            A.userAccountSelectData({ tradeAddress: defaultTradeAddress, mainAddress })
          );
          dispatch(A.userAccountSelectFetch({ tradeAddress: defaultTradeAddress }));
          dispatch(A.userSetAvatar());
        }

        if (!isConfirmed && userExists) {
          onHandleNotification({
            type: "Attention",
            message: "Please confirm your email, sign in again and confirm your email.",
          });
        }
      } catch (error) {
        onHandleError(`User auth error:${error?.message ?? error}`);
        dispatch(A.userAuthError(error));
      }
    },
    [
      onHandleError,
      onHandleNotification,
      getAllMainLinkedAccounts,
      state?.userData?.userAccounts,
    ]
  );

  const onUserLogout = () => {
    dispatch(A.userReset());
  };

  const onUserChangeInitBanner = (payload = false) => {
    dispatch(A.userChangeInitBanner(payload));
  };

  const onUserAuthFetch = () => {
    dispatch(A.userAuthFetch());
  };

  const onUserProfileMainAccountPush = (payload: string) => {
    dispatch(A.userProfileMainAccountPush(payload));
  };

  const onUserProfileAccountPush = (payload: T.UserAccount) => {
    dispatch(A.userProfileAccountPush(payload));
  };

  const onUserProfileTradeAccountDelete = (payload: string) => {
    dispatch(A.userProfileTradeAccountDelete(payload));
  };

  const onUserAccountSelectFetch = (payload: A.UserAccountSelectFetch["payload"]) => {
    dispatch(A.userAccountSelectFetch(payload));
  };

  const onUserSetDefaultTradeAccount = (payload: A.UserSetDefaultTradeAccount["payload"]) => {
    dispatch(A.userSetDefaultTradeAccount(payload));
  };

  const onUserSetAvatar = (payload?: A.UserSetAvatar["payload"]) => {
    dispatch(A.userSetAvatar(payload));
  };

  const onUserFavoriteMarketPush = (payload: A.UserFavoriteMarketPush["payload"]) => {
    dispatch(A.userFavoriteMarketPush(payload));
  };

  const signInSuccess = signin.isSuccess;
  const logoutIsSuccess = logout.isSuccess;

  const fetchDataOnUserAuth = useCallback(async () => {
    try {
      const { attributes, signInUserSession } = await Auth.currentAuthenticatedUser();
      onUserChangeInitBanner();
      onUserAuth({
        email: attributes?.email,
        userConfirmed: attributes?.email_verified,
      });
      onUserAuthentication({
        email: attributes?.email,
        isAuthenticated: true,
        userExists: true,
        isConfirmed: attributes?.email_verified,
        jwt: signInUserSession?.accessToken?.jwtToken,
      });
    } catch (error) {
      console.log("User error", error);
      switch (error) {
        case "User is not confirmed.": {
          onUserAuth({
            email: "",
            userConfirmed: false,
          });
          onUserAuthentication({
            email: "",
            isAuthenticated: false,
            userExists: true,
            isConfirmed: false,
          });
          break;
        }
        case "The user is not authenticated": {
          break;
        }
        default: {
          console.error("Error=>", `User data fetch error: ${error.message}`);
          onHandleError(`User data fetch error: ${error?.message ?? error}`);
          break;
        }
      }
    }
  }, [onUserAuth, onUserAuthentication, onHandleError]);

  useEffect(() => {
    // When User logout, do not fetch the data
    if (!logoutIsSuccess) fetchDataOnUserAuth();
  }, [logoutIsSuccess, signInSuccess, fetchDataOnUserAuth]);

  useEffect(() => {
    if (logoutIsSuccess) onUserLogout();
  }, [logoutIsSuccess]);

  // user event listener
  return (
    <Provider
      value={{
        ...state,
        onUserSelectAccount,
        onUserAuth: onUserAuthentication,
        onUserLogout,
        onUserChangeInitBanner,
        onUserAuthFetch,
        onUserProfileAccountPush,
        onUserProfileTradeAccountDelete,
        onUserProfileMainAccountPush,
        onUserAccountSelectFetch,
        onUserSetDefaultTradeAccount,
        onUserSetAvatar,
        onUserFavoriteMarketPush,
      }}>
      {children}
    </Provider>
  );
};
