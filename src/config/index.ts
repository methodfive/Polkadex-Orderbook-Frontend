import { DefaultConfig } from ".";
export * from "./types";
export * from "./config";

export const defaultConfig: DefaultConfig = {
  influxDBUrl: process.env.INFLUX_DB_URL,
  polkadotJsWs: process.env.POLKADEX_WS,
  auth: process.env.POLKADEX_HOST_URL,
  engine: `${process.env.HOST_URL}/api/v2/peatio`,
  polkadexHostUrl: `${process.env.POLKADEX_HOST_URL}`,
  gaTrackerKey: process.env.GOOGLE_ANALITYCS_URL,
  withCredentials: false,
  incrementalOrderBook: false,
  orderBookSideLimit: 25,
  defaultStorageLimit: 50,
  defaultTradingViewInterval: 15,
  sessionCheckInterval: 15000,
  balancesFetchInterval: 3000,
  minutesUntilAutoLogout: 5,
  msAlertDisplayTime: 5000,
  msPricesUpdates: 1000,
  maintenanceMode: false,
};
