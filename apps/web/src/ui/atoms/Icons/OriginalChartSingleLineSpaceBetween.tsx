import * as React from "react";

export function OriginalChartSingleLineSpaceBetween(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <rect stroke="none" x="5" y="11.5" width="14" height="1" rx="0.5"></rect>
      <ellipse cx="6" cy="12" rx="1.5" ry="1.5"></ellipse>
      <ellipse cx="18" cy="12" rx="1.5" ry="1.5"></ellipse>
    </svg>
  );
}
