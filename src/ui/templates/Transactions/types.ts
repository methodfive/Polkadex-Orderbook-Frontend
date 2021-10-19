import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";

export type Props = {
  date?: string;
  baseUnit?: string;
  quoteUnit?: string;
  side?: string | ReactNode;
  isSell?: boolean;
  price?: string | ReactNode;
  amount?: string | ReactNode;
  total?: string | ReactNode;
  filled?: string | ReactNode;
  type?: "Limit" | "Market";
  onCancel?: () => void;
};
