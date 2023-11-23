import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { defaultConfig } from "@orderbook/core/config";
import { LOCAL_STORAGE_ID } from "@orderbook/core/constants";
import { useAssetsMetaData, useMarketsData } from "@orderbook/core";
import LoadingScreen from "@polkadex/orderbook-ui/molecules/LoadingScreen";

function Home() {
  const router = useRouter();
  const persistedMarket = useMemo(
    () =>
      process.browser &&
      window.localStorage.getItem(LOCAL_STORAGE_ID.DEFAULT_MARKET),
    []
  );

  const {
    currentMarket,
    list: allMarkets,
    loading: marketLoading,
  } = useMarketsData();

  const { loading: assetLoading } = useAssetsMetaData();

  const findMarket = allMarkets?.find(
    (market) => market.id === persistedMarket
  );

  useEffect(() => {
    if (!marketLoading && !assetLoading) {
      if (findMarket) {
        router.push(
          `/trading/${
            findMarket.baseAsset.ticker + findMarket.quoteAsset.ticker
          }`
        );
      } else {
        if (currentMarket)
          router.push(
            `/trading/${
              currentMarket.baseAsset.ticker + currentMarket.quoteAsset.ticker
            }`
          );
        else router.push(`/trading/${defaultConfig.landingPageMarket}`);
      }
    }
  }, [assetLoading, currentMarket, findMarket, marketLoading, router]);

  // Note: This could be used as masking page
  return <LoadingScreen />; // This is a temporary fix. (Showing loading indicator)
}

export default Home;
