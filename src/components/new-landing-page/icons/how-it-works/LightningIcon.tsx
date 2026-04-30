import type { SVGProps } from "react";

export function LightningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M12.5 1.25L11.25 7.5L16.25 9.375L7.5 18.75L8.75 12.5L3.75 10.625L12.5 1.25Z"
        stroke="#321207"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
