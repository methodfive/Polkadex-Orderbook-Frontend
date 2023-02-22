// TODO - Code Cleaning 

import { call, fork, put, select } from "redux-saga/effects";
import { ApiPromise } from "@polkadot/api";
import { Signer } from "@polkadot/types/types";
import { stringToHex } from "@polkadot/util";

import * as mutations from "../../../../graphql/mutations";
import {
  notificationPush,
  removeTradeAccountFromBrowser,
  selectRangerApi,
  selectUserEmail,
  registerTradeAccountData,
  userProfileAccountPush,
  userProfileMainAccountPush,
  selectMainAccount,
} from "../../..";
import {
    LinkEmail,
  registerMainAccountData,
  registerMainAccountError,
  RegisterMainAccountFetch,
} from "../actions";

import { ExtrinsicResult, signAndSendExtrinsic } from "@polkadex/web-helpers";
import { ExtensionAccount } from "@polkadex/orderbook/modules/types";
import { sendQueryToAppSync } from "@polkadex/orderbook/helpers/appsync";
import { ErrorMessages } from "@polkadex/web-constants";
import { userEventsChannelHandler } from "@polkadex/orderbook/modules/user/userEventsListener/sagas/userEventsChannel";

type LinkEmailData = { email: string; main_address: string };

export function* linkEmailSaga(action: LinkEmail) {
  let data: LinkEmailData, signature: string;
  const { mainAccount, tradeAddress, mnemonic } = action.payload;
  try {
    const selectedControllerAccount = yield select(selectMainAccount(mainAccount));
    const email = yield select(selectUserEmail);
    const api: ApiPromise = yield select(selectRangerApi);
    // listen for events in this new registered main address
    yield fork(userEventsChannelHandler, selectedControllerAccount.account.address);
    const hasAddressAndEmail =
      !!selectedControllerAccount.account?.address?.length && !!email?.length;

    console.log(hasAddressAndEmail,'here...')

    if (hasAddressAndEmail) {
      const signedData = yield call(createSignedData, selectedControllerAccount, email);
      data = signedData.data;
      signature = signedData.signature;
      yield call(executeRegisterEmail, data, signature);

      // yield put(registerMainAccountData());

      // const res = yield call(() =>
      //   registerMainAccount(
      //     api,
      //     tradeAddress,
      //     selectedControllerAccount.signer,
      //     selectedControllerAccount.account?.address
      //   )
      // );
      // if (res.isSuccess) {
        // yield put(
        //   registerTradeAccountData({
        //     mnemonic,
        //     account: {
        //       name: selectedControllerAccount.account.meta.name,
        //       address: selectedControllerAccount.account.address,
        //     },
        //   })
        // );
        // yield put(registerMainAccountData());
      // } else {
      //   throw new Error("Extrinsic failed");
      // }

    } else {
      throw new Error("Email or address is not valid");
    }
  } catch (error) {
    console.log("error in registration:", error.message);

    // if account is already registered , it means that that sending data to aws failed on a previous attempt
    // but it was successfully on the blockchain, since the transaction was submitted and signed by the wallet
    // it is assumed that the wallet belongs to the user, so we do a retry of sending to aws.

    if (error.message === ErrorMessages.OCEX_ALREADY_REGISTERED) {
      yield call(retryRegisterToAppsync, data, signature, tradeAddress, mainAccount);
      return;
    }
    yield put(removeTradeAccountFromBrowser({ address: tradeAddress }));
    yield put(registerMainAccountError());
    yield put(
      notificationPush({
        message: { title: "Cannot Register Account!", description: error.message },
        type: "ErrorAlert",
        time: new Date().getTime(),
      })
    );
  }
}

// export const registerMainAccount = async (
//   api: ApiPromise,
//   proxyAddress: string,
//   signer: Signer,
//   mainAddress: string
// ): Promise<ExtrinsicResult> => {
//   const ext = api.tx.ocex.registerMainAccount(proxyAddress);
//   const res = await signAndSendExtrinsic(api, ext, { signer }, mainAddress, true);
//   return res;
// };

const createSignedData = async (
  mainAccount: ExtensionAccount,
  email: string
): Promise<{ data: LinkEmailData; signature: string }> => {
  const { signer, account } = mainAccount;
  const signRaw = signer?.signRaw;
  const main_address = account.address;
  if (signRaw) {
    const data: LinkEmailData = { email, main_address };
    const { signature } = await signRaw({
      address: account.address,
      data: stringToHex(JSON.stringify(data)),
      type: "bytes",
    });
    return { data, signature };
  } else throw new Error("Cannot get Signer");
};

const executeRegisterEmail = async (data: LinkEmailData, signature: string) => {
  const payloadStr = JSON.stringify({ RegisterUser: { data, signature } });
  const res = await sendQueryToAppSync({
    query: mutations.register_user,
    variables: {
      input: { payload: payloadStr },
    },
    token: null,
    authMode: "AMAZON_COGNITO_USER_POOLS",
  });
  return res;
};

function* retryRegisterToAppsync(
  data: LinkEmailData,
  signature: string,
  tradeAddress,
  mainAddress
) {
  try {
    yield call(executeRegisterEmail, data, signature);
    yield put(
      userProfileAccountPush({
        tradeAddress,
        mainAddress,
      })
    );
    yield put(userProfileMainAccountPush(mainAddress));
    yield put(registerMainAccountData());
  } catch (error) {
    console.log("error");
    yield put(registerMainAccountError());
    yield put(
      notificationPush({
        message: { title: "Cannot Register Account to Server!", description: error.message },
        type: "ErrorAlert",
        time: new Date().getTime(),
      })
    );
  }
}
