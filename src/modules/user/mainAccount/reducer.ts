import { InjectedAccount } from "../tradeAccount";

import { GetExtensionWalletAction, MainAccount } from "./actions";
import {
  POLKADOT_EXTENSION_WALLET_FETCH,
  POLKADOT_EXTENSION_WALLET_ERROR,
  POLKADOT_EXTENSION_WALLET_DATA,
  MAIN_ACCOUNT_SET_FETCH,
  EXTENSION_WALLET_RESET,
  MAIN_ACCOUNT_SET_DATA,
  REGISTER_MAIN_ACCOUNT_FETCH,
  REGISTER_MAIN_ACCOUNT_DATA,
  SET_ASSOCIATED_ACCOUNTS_FETCH,
  SET_ASSOCIATED_ACCOUNTS_DATA,
  SET_ASSOCIATED_ACCOUNTS_ERROR,
  REGISTER_MAIN_ACCOUNT_ERROR,
} from "./constants";

export interface MainAccountState {
  success?: boolean;
  isFetching: boolean;
  allBrowserAccounts: InjectedAccount[];
  allAccounts: string[];
  selectedAccount: MainAccount;
  registerMainAccountLoading: boolean;
  registerMainAccountSuccess: boolean;
  setMainAccountLoading: boolean;
  associatedTradeAccounts: string[];
  associatedAccountsLoading: boolean;
  associatedAccountsSuccess: boolean;
}

const defaultAccount: MainAccount = {
  address: "",
  account: null,
  injector: null,
  name: "",
};

const initialState: MainAccountState = {
  isFetching: false,
  success: false,
  allBrowserAccounts: [],
  allAccounts: [],
  associatedTradeAccounts: [],
  selectedAccount: defaultAccount,
  registerMainAccountLoading: false,
  registerMainAccountSuccess: false,
  associatedAccountsLoading: false,
  associatedAccountsSuccess: false,
  setMainAccountLoading: false,
};

export const mainAccountReducer = (
  state = initialState,
  action: GetExtensionWalletAction
): MainAccountState => {
  switch (action.type) {
    case POLKADOT_EXTENSION_WALLET_DATA:
      return {
        ...state,
        isFetching: false,
        success: true,
        allBrowserAccounts: action.payload.allAccounts,
      };
    case POLKADOT_EXTENSION_WALLET_ERROR:
      return {
        ...state,
        isFetching: false,
        success: false,
      };
    case POLKADOT_EXTENSION_WALLET_FETCH:
      return {
        ...state,
        success: false,
        isFetching: true,
      };
    case MAIN_ACCOUNT_SET_FETCH:
      return {
        ...state,
        setMainAccountLoading: true,
      };
    case MAIN_ACCOUNT_SET_DATA:
      return {
        ...state,
        selectedAccount: action.payload.user,
        setMainAccountLoading: false,
        associatedAccountsLoading: true,
      };
    case SET_ASSOCIATED_ACCOUNTS_FETCH:
      return {
        ...state,
        associatedAccountsLoading: true,
      };
    case SET_ASSOCIATED_ACCOUNTS_DATA:
      return {
        ...state,
        associatedTradeAccounts: action.payload,
        associatedAccountsSuccess: true,
        associatedAccountsLoading: false,
      };
    case SET_ASSOCIATED_ACCOUNTS_ERROR:
      return {
        ...state,
        associatedAccountsLoading: false,
        associatedAccountsSuccess: false,
      };
    case EXTENSION_WALLET_RESET:
      return {
        ...initialState,
      };
    case REGISTER_MAIN_ACCOUNT_FETCH:
      return {
        ...state,
        registerMainAccountLoading: true,
        registerMainAccountSuccess: false,
      };
    case REGISTER_MAIN_ACCOUNT_DATA:
      return {
        ...state,
        registerMainAccountLoading: false,
        registerMainAccountSuccess: true,
      };
    case REGISTER_MAIN_ACCOUNT_ERROR:
      return {
        ...state,
        registerMainAccountLoading: false,
        registerMainAccountSuccess: false,
      };
    default:
      return state;
  }
};
