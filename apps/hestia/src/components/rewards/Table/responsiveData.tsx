import { Dispatch, SetStateAction } from "react";
import { Button, Drawer, Tokens } from "@polkadex/ux";
import { useRouter } from "next/navigation";
import { LmpMarketConfig } from "@orderbook/core/index";

import { MarketCard } from "./marketCard";

import { ResponsiveCard } from "@/components/ui/ReadyToUse";

export const ResponsiveData = ({
  open,
  onOpenChange,
  data,
}: {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  data: LmpMarketConfig | null;
}) => {
  const router = useRouter();
  if (!data) return null;
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      closeOnClickOutside
      shouldScaleBackground={false}
    >
      <Drawer.Title className="px-4">
        <MarketCard
          marketName={`${data?.baseAsset?.ticker}/${data?.quoteAsset?.ticker}`}
          icon={data?.baseAsset?.ticker as keyof typeof Tokens}
          pairIcon={data?.quoteAsset?.ticker as keyof typeof Tokens}
        />
      </Drawer.Title>
      <Drawer.Content className="flex flex-col gap-2 p-4">
        <ResponsiveCard label="Score">{data?.marketScore}</ResponsiveCard>
        <ResponsiveCard label="Total Fee">
          {data.totalMarketFee.toFixed(4)} {data.quoteAsset?.ticker}
        </ResponsiveCard>
        <ResponsiveCard label="Volume 24h">
          {data?.quoteVolume24h.toFixed(4)} {data?.quoteAsset?.ticker}
        </ResponsiveCard>
        <ResponsiveCard label="My Rewards">
          {Number(data?.rewards.marketMaking) + Number(data?.rewards.trading)}{" "}
          PDEX
        </ResponsiveCard>
      </Drawer.Content>
      <Drawer.Footer className="p-4">
        <Button.Solid
          appearance="secondary"
          className="w-full"
          onClick={() =>
            router.push(
              `/rewards/${data?.baseAsset?.ticker}${data?.quoteAsset?.ticker}`
            )
          }
        >
          Open metrics
        </Button.Solid>
      </Drawer.Footer>
    </Drawer>
  );
};
