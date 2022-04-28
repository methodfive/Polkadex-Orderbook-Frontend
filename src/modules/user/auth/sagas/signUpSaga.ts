import { put, delay, call, select } from "redux-saga/effects";
import keyring from "@polkadot/ui-keyring";
import { ApiPromise } from "@polkadot/api";

import { sendError, selectMainAccount, selectRangerApi, alertPush } from "../../../";
import { signUpData, signUpError, SignUpFetch } from "../actions";
import { notificationPush } from "../../notificationHandler";
import { MainAccount } from "../../mainAccount";

import { ExtrinsicResult, signAndSendExtrinsic } from "@polkadex/web-helpers";

export function* signUpSaga(action: SignUpFetch) {
  try {
    const api = yield select(selectRangerApi);
    const mainAccount: MainAccount = yield select(selectMainAccount);
    const { mnemonic, password, accountName } = action.payload;
    keyring.setSS58Format(88);
    const { pair } = keyring.addUri(mnemonic, password, { name: accountName });
    const proxyAddress = pair.address;
    if (api && mainAccount.address) {
      const res = yield call(() =>
        registerAccount(api, proxyAddress, mainAccount.injector, mainAccount.address)
      );
      if (res.isSuccess) {
        yield put(
          alertPush({
            type: "Successful",
            message: {
              title: "New proxy account Registered",
            },
          })
        );
        yield delay(3000);
        yield put(signUpData());
      } else {
        throw new Error(res.message);
      }
    }
  } catch (error) {
    yield put(
      sendError({
        error,
        processingType: "alert",
        extraOptions: {
          actionError: signUpError,
        },
      })
    );
  }
}
// TODO: Check if registerAccount has been successful
export const registerAccount = async (
  api: ApiPromise,
  proxyAddress: string,
  injector: any,
  mainAddress: string
): Promise<ExtrinsicResult> => {
  const ext = api.tx.ocex.registerMainAccount(proxyAddress);
  const res = await signAndSendExtrinsic(api, ext, injector, mainAddress);
  return res;
};
