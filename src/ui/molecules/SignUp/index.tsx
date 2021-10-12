import { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";

import * as S from "./styles";

import { Button, Input, MnemonicImport, MnemonicExport, MnemonicSelect } from "src/ui";
import { useMnemonic } from "src/hooks/useMnemonic";
import { signUp } from "src/modules";
import { selectPolkadotWalletCurrentAccount } from "src/modules/user/polkadotWallet";
import { useReduxSelector } from "src/hooks";
import { useExtrinsics } from "src/hooks/useExtrinsics";

const defaultValues = {
  password: "",
  account: "",
  accountName: "",
  terms: false,
};

export const SignUp = () => {
  const [state, setState] = useState({ isReady: false, isExport: false });
  const { mnemonic, mnemoicString } = useMnemonic({ isExport: state.isExport });
  const dispatch = useDispatch();
  const selectedAccount = useReduxSelector(selectPolkadotWalletCurrentAccount);
  console.log("selectedAccount from makeproxycomponent", selectedAccount);
  const extrinsics = useExtrinsics(selectedAccount);
  return (
    <S.Wrapper>
      <h4>Import/export trading account</h4>
      <Formik
        initialValues={defaultValues}
        onSubmit={async (values) => {
          dispatch(
            signUp({
              username: values.accountName,
              password: values.password,
              mnemonic: mnemoicString,
            })
          );
          extrinsics.sendOcexRegisterExtrinsic();
        }}>
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <S.Container>
              {!state.isReady ? (
                <MnemonicSelect
                  handleExport={() => setState({ isReady: true, isExport: true })}
                  handleImport={() => setState({ isReady: true, isExport: false })}
                />
              ) : (
                <div>
                  {state.isExport ? (
                    <MnemonicExport
                      label="12-word mnemonic seed"
                      handleChange={() => setState({ isReady: true, isExport: false })}
                      phrases={mnemonic}
                    />
                  ) : (
                    <MnemonicImport
                      value="witch collapse practice feed shame open despair road again ice least coffee"
                      label="12-word mnemonic seed"
                      name="account"
                      handleChange={() => setState({ isReady: true, isExport: true })}
                    />
                  )}
                </div>
              )}
              <p>
                The mnemonic can be used to restore your wallet. Having the mnemonic phrases
                can have a full control over the assets.
              </p>
            </S.Container>

            <Input
              label="Account name"
              name="accountName"
              placeholder="Enter a name fot this account"
              type="text"
              error={errors.accountName && touched.accountName && errors.accountName}
            />
            <Input
              label="Password"
              name="password"
              placeholder="Enter a new password fot this account"
              type="password"
              error={errors.password && touched.password && errors.password}
            />
            {/* <Checkbox
              name="terms"
              label="I have saved my mnemonic seed safely"
            error={errors.terms && touched.terms && errors.terms}
            /> */}
            <Button title="Create account" type="submit" isFull style={{ marginTop: 20 }} />
          </Form>
        )}
      </Formik>
    </S.Wrapper>
  );
};
