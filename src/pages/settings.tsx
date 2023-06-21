import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useDisabledPages } from "../hooks/useDisabledPages";

import { useProfile } from "@polkadex/orderbook/providers/user/profile";

const SettingsTemplate = dynamic(
  () =>
    import("@polkadex/orderbook-ui/templates/Settings").then((mod) => mod.SettingsTemplate),
  {
    ssr: false,
  }
);
const Settings = () => {
  const router = useRouter();
  const { disabled } = useDisabledPages();

  const {
    authInfo: { isAuthenticated: hasUser },
  } = useProfile();

  useEffect(() => {
    if (!hasUser) router?.push("/trading/");
  }, [hasUser, router]);

  if (!hasUser || disabled) return <div />;
  return <SettingsTemplate />;
};

export default Settings;
