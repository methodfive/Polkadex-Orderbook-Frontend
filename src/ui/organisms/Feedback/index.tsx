import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { Rating } from "../Rating";

import * as S from "./styles";

import { Button } from "@polkadex/orderbook-ui/molecules";
import { useSettingsProvider } from "@polkadex/orderbook/providers/public/settings";
import { FAQHeader } from "@polkadex/orderbook-ui/molecules/FAQHeader";
const Feedback = () => {
  const { onHandleAlert } = useSettingsProvider();
  const formik = useFormik({
    initialValues: {
      answer: null,
      answerValue: "",
      userFriendly: null,
      userFriendlyValue: "",
      stars: "best",
      value: "",
    },
    validationSchema: Yup.object({
      answerValue: Yup.string().typeError("Input must be a string"),
      userFriendlyValue: Yup.string().typeError("Input must be a string"),
      value: Yup.string().typeError("Input must be a string"),
    }),
    onSubmit: (values) => {
      onHandleAlert(JSON.stringify(values, null, 2));
    },
  });

  const router = useRouter();
  const handleStarClick = (selectedValue) => {
    formik.setFieldValue("stars", selectedValue);
  };
  const handleAnswer = (value) => {
    formik.setFieldValue("answer", value);
  };
  const handleUserFriendly = (value) => {
    formik.setFieldValue("userFriendly", value);
  };
  const answerRef = useRef<HTMLDivElement>(null);
  const userFriendlyRef = useRef<HTMLDivElement>(null);

  const answerHeight = formik.values.answer === false ? answerRef.current?.scrollHeight : 0;
  const userFriendlyHeight =
    formik.values.userFriendly === false ? userFriendlyRef.current?.scrollHeight : 0;

  const { t: translation } = useTranslation("organisms");
  const t = (key: string) => translation(`feedback.${key}`);

  return (
    <S.Container>
      <FAQHeader heading={t("heading")} pathname={router.pathname} />
      <form action="" onSubmit={formik.handleSubmit}>
        <S.BorderWrapper>
          <S.QuestionWrapper>
            <S.Question>Were we able to answer your question?</S.Question>
            <S.SwitchWrapper>
              <S.Switch onClick={() => handleAnswer(false)}>
                <S.SwitchHandle active={formik.values.answer === false}></S.SwitchHandle>
                <S.SwitchText>No</S.SwitchText>
              </S.Switch>
              <S.Switch onClick={() => handleAnswer(true)}>
                <S.SwitchHandle active={formik.values.answer}></S.SwitchHandle>
                <S.SwitchText>Yes</S.SwitchText>
              </S.Switch>
            </S.SwitchWrapper>

            <S.Comment ref={answerRef} maxHeight={answerHeight}>
              <S.Question>
                Please state your query below and our Support Executive will get back to you
              </S.Question>
              <S.Input
                placeholder="Enter your comments"
                {...formik.getFieldProps("answerValue")}
              />
            </S.Comment>

            <S.Question>Was the FAQ Webpage user friendly?</S.Question>
            <S.SwitchWrapper>
              <S.Switch onClick={() => handleUserFriendly(false)}>
                <S.SwitchHandle active={formik.values.userFriendly === false}></S.SwitchHandle>
                <S.SwitchText>No</S.SwitchText>
              </S.Switch>
              <S.Switch onClick={() => handleUserFriendly(true)}>
                <S.SwitchHandle active={formik.values.userFriendly}></S.SwitchHandle>
                <S.SwitchText>Yes</S.SwitchText>
              </S.Switch>
            </S.SwitchWrapper>

            <S.Comment ref={userFriendlyRef} maxHeight={userFriendlyHeight}>
              <S.Question>What would you want us to improve ?</S.Question>
              <S.Input
                placeholder="Enter your comments"
                {...formik.getFieldProps("userFriendlyValue")}
              />
            </S.Comment>

            <S.Question>How would you rate our service?</S.Question>

            <Rating value={formik.values.stars} onClick={handleStarClick} />
            <S.Question>Additional comments(Optional)</S.Question>
            <div>
              <S.Input
                placeholder={t("inputPlaceholder")}
                {...formik.getFieldProps("value")}
              />
              {formik.touched.value && formik.errors.value ? (
                <S.InputError>{formik.errors.value}</S.InputError>
              ) : null}
            </div>

            <Button
              type="submit"
              size="extraLarge"
              background="primary"
              hoverColor="primary"
              color="white"
              disabled={
                !(
                  formik.isValid &&
                  formik.dirty &&
                  formik.values.answer !== null &&
                  formik.values.userFriendly !== null
                )
              }
              isFull>
              {t("submitRequest")}
            </Button>
          </S.QuestionWrapper>
        </S.BorderWrapper>
      </form>
    </S.Container>
  );
};

export default Feedback;
