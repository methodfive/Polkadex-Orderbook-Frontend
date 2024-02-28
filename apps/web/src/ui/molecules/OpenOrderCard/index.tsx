import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { Icon } from "@polkadex/orderbook-ui/molecules";
import { useCancelOrder } from "@orderbook/core/hooks";

import * as S from "./styles";

type RowData = { value: string };
export const OpenOrderCard = ({
  isSell,
  orderType,
  orderId,
  base,
  quote,
  baseUnit,
  quoteUnit,
  data = [] as RowData[],
}) => {
  const { mutateAsync: onCancelOrder, isLoading: cancelLoading } =
    useCancelOrder();
  const [isCancelClicked, setIsCancleClicked] = useState(false);

  const handleCancelClick = () => {
    if (!isCancelClicked) {
      setIsCancleClicked(true);
      onCancelOrder({ orderId, base, quote });
    }
  };
  useEffect(() => {
    if (!cancelLoading) setIsCancleClicked(false);
  }, [cancelLoading]);

  const { t: translation } = useTranslation("molecules");
  const t = (key: string) => translation(`openOrderCard.${key}`);

  return (
    <S.Tr>
      <S.Td>
        <S.Tag>{t("pair")}</S.Tag>
        <S.ContainerFlex>
          <S.Image isSell={isSell}>
            <Icon name={isSell ? "SellOrder" : "BuyOrder"} size="large" />
          </S.Image>
          <span>
            {baseUnit}/{quoteUnit}
          </span>
        </S.ContainerFlex>
      </S.Td>
      <S.Td>
        <S.Tag>{t("date")}</S.Tag>
        <S.ContainerFlex>{data[0].value}</S.ContainerFlex>
      </S.Td>

      <S.Td>
        <S.Tag>{t("type")}</S.Tag>
        <S.ContainerFlex>
          <span>{orderType}</span>
        </S.ContainerFlex>
      </S.Td>

      <S.Td>
        <S.Tag>{t("price")}</S.Tag>
        <span>{data[3].value}</span>
      </S.Td>

      <S.Td>
        <S.Tag>{t("total")}</S.Tag>
        <span>{data[4].value}</span>
      </S.Td>

      <S.Td>
        <S.Tag>{t("filled")}</S.Tag>
        <span>{data[5].value}</span>
      </S.Td>

      <S.Td>
        <S.Tag>{t("actions")}</S.Tag>

        <S.ContainerActions>
          <button type="button" onClick={handleCancelClick}>
            {t("cancelOrder")}
          </button>
        </S.ContainerActions>
      </S.Td>
    </S.Tr>
  );
};
