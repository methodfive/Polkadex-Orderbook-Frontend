"use client";

import {
  Accordion,
  Button,
  Copy,
  Dropdown,
  Interaction,
  Skeleton,
  Typography,
} from "@polkadex/ux";
import { RiAddLine, RiFileCopyLine, RiGasStationLine } from "@remixicon/react";
import { Fragment, useMemo, useRef, useState } from "react";
import { useResizeObserver } from "usehooks-ts";
import Link from "next/link";
import { useFunds } from "@orderbook/core/index";

import { GenericHorizontalItem } from "../ReadyToUse";

import { FeeAssetReserve, usePool } from "@/hooks";

export const ConfirmTransaction = ({ onClose }: { onClose: () => void }) => {
  const [fee, setFee] = useState(2);

  const [state, setState] = useState<FeeAssetReserve | null>(null);

  const ref = useRef<HTMLButtonElement>(null);

  const { width = 0 } = useResizeObserver({
    ref,
    box: "border-box",
  });

  const { swapPrice, swapLoading, poolReserves, poolReservesSuccess } = usePool(
    {
      asset: state,
      amount: fee,
    }
  );

  const { balances, loading: balancesLoading } = useFunds();

  const isPDEX = useMemo(() => state?.id === "PDEX", [state]);
  return (
    <Interaction className="w-full gap-2 md:min-w-[24rem] md:max-w-[24rem]">
      <Interaction.Title onClose={{ onClick: onClose }}>
        Confirm Transaction
      </Interaction.Title>
      <Interaction.Content className="flex flex-col p-3">
        <div className="flex flex-col border-b border-primary px-3 pb-4">
          <Typography.Text appearance="primary">Extrinsic</Typography.Text>
          <Accordion type="multiple">
            <Accordion.Item value="extrinsic">
              <Accordion.Trigger>
                <Typography.Text>ocex.addProxyAccount</Typography.Text>
                <Accordion.Icon>
                  <RiAddLine className="w-4 h-4 text-primary" />
                </Accordion.Icon>
              </Accordion.Trigger>
              <Accordion.Content>
                <div className="flex flex-col mt-4 border-t border-primary">
                  <Typography.Text appearance="primary" className="py-3">
                    [Pallet::add_proxy_account]
                  </Typography.Text>
                  <GenericHorizontalItem label="Call hash" className="px-0">
                    <Copy value="0xD3…6Ae">
                      <div className="flex items-center gap-1">
                        <RiFileCopyLine className="w-3 h-3 text-secondary" />
                        <Typography.Text>0x706ef84f...48985697</Typography.Text>
                      </div>
                    </Copy>
                  </GenericHorizontalItem>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="flex flex-col border-b border-primary">
          <GenericHorizontalItem label="Sending from">
            <Copy value="0xD3…6Ae">
              <div className="flex items-center gap-1">
                <RiFileCopyLine className="w-3 h-3 text-secondary" />
                <Typography.Text>Orderbook • 0xD3…6Ae</Typography.Text>
              </div>
            </Copy>
          </GenericHorizontalItem>
          {isPDEX ? (
            <GenericHorizontalItem label="Estimated fee">
              <Copy value="0xD3…6Ae">
                <div className="flex items-center gap-1">
                  <RiGasStationLine className="w-3.5 h-3.5 text-secondary" />
                  <Typography.Text>{fee} PDEX</Typography.Text>
                </div>
              </Copy>
            </GenericHorizontalItem>
          ) : (
            <GenericHorizontalItem
              label="Estimated fee"
              tooltip="Swap using Polkapool"
            >
              <div className="flex items-center gap-1">
                <RiGasStationLine className="w-3.5 h-3.5 text-secondary" />
                <Skeleton loading={swapLoading} className="min-h-4 max-w-10">
                  <div className="flex items-center gap-1">
                    <Typography.Text>{`${swapPrice} ${state?.name}`}</Typography.Text>
                    <Typography.Text appearance="primary">≈</Typography.Text>
                    <Typography.Text>{`${fee} PDEX`}</Typography.Text>
                  </div>
                </Skeleton>
              </div>
            </GenericHorizontalItem>
          )}

          <Dropdown>
            <Dropdown.Trigger
              ref={ref}
              className=" px-3 py-3 bg-level-1 border border-primary"
            >
              <div className="flex-1 w-full flex items-cneter justify-between gap-2">
                <Typography.Text appearance="primary">
                  Pay fee with
                </Typography.Text>
                <Typography.Text>
                  {state ? state.name : "Select token"}
                </Typography.Text>
              </div>
              <Dropdown.Icon />
            </Dropdown.Trigger>
            <Dropdown.Content
              style={{ width, maxHeight: 250, overflow: "auto" }}
              className="scrollbar-hide"
            >
              {!poolReservesSuccess ? (
                <div className="flex flex-col gap-2 p-4">
                  {new Array(3).fill("").map((_, i) => (
                    <Skeleton key={i} className="min-h-10" loading />
                  ))}
                </div>
              ) : (
                <Fragment>
                  {poolReserves?.map((e) => {
                    const balance = balances?.find(
                      (bal) => bal.asset.id === e.id
                    );
                    return (
                      <Dropdown.Item
                        key={e.id}
                        onSelect={() => setState(e)}
                        className="flex justify-between items-center gap-2"
                        disabled={!e.poolReserve}
                      >
                        {e.poolReserve ? (
                          <div className="flex items-center justify-between gap-1 w-full">
                            <Typography.Text>{e.name}</Typography.Text>
                            <div className="flex items-center gap-1">
                              <Typography.Text appearance="primary">
                                Balance:
                              </Typography.Text>
                              <Skeleton
                                loading={balancesLoading}
                                className="min-h-5"
                              >
                                <Typography.Text appearance="primary">
                                  {balance?.free.toFixed(4)}
                                </Typography.Text>
                              </Skeleton>
                            </div>
                          </div>
                        ) : (
                          <Fragment>
                            <div className="flex items-center gap-1">
                              <Typography.Text appearance="primary">
                                {e.name}
                              </Typography.Text>
                              <Typography.Text appearance="primary">
                                (Insufficient liquidity)
                              </Typography.Text>
                            </div>
                            <Button.Solid size="xs" appearance="secondary">
                              <Link
                                target="_blank"
                                href="https://polkapool-test.netlify.app/pools"
                              >
                                Add liquidity
                              </Link>
                            </Button.Solid>
                          </Fragment>
                        )}
                      </Dropdown.Item>
                    );
                  })}
                </Fragment>
              )}
            </Dropdown.Content>
          </Dropdown>
        </div>
        <div className="flex flex-col gap-3 px-3 pt-4">
          <Typography.Text appearance="secondary" bold>
            Terms and conditions
          </Typography.Text>
          <div className="overflow-hidden relative">
            <div className=" max-h-24 overflow-auto pb-6">
              <Typography.Paragraph size="sm" appearance="primary">
                By accessing this website we assume you accept these terms and
                conditions. Do not continue to use Orderbook if you do not agree
                to take all of the terms and conditions stated on this page. The
                following terminology applies to these Terms and Conditions,
                Privacy Statement and Disclaimer Notice and all Agreements:
                Client, You and Your refers to you, the person log on this
                website and compliant to the Companys terms and conditions. By
                accessing this website we assume you accept these terms and
                conditions. Do not continue to use Orderbook if you do not agree
                to take all of the terms and conditions stated on this page. The
                following terminology applies to these Terms and Conditions,
                Privacy Statement and Disclaimer Notice and all Agreements:
                Client, You and Your refers to you, the person log on this
                website and compliant to the Companys terms and conditions.
              </Typography.Paragraph>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[45px] bg-gradient-to-t from-level-0 to-transparent" />
          </div>
        </div>
      </Interaction.Content>
      <Interaction.Footer>
        <Interaction.Action
          appearance="secondary"
          onClick={() => window.alert("testing...")}
        >
          Sign and Submit
        </Interaction.Action>
        <Interaction.Close onClick={onClose}>Close</Interaction.Close>
      </Interaction.Footer>
    </Interaction>
  );
};
