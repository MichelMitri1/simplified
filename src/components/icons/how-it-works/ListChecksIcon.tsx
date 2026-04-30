import type { SVGProps } from "react";

export function ListChecksIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M10 10H16.875" stroke="#321207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 5H16.875" stroke="#321207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 15H16.875" stroke="#321207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.125 5L4.375 6.25L6.875 3.75" stroke="#321207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.125 10L4.375 11.25L6.875 8.75" stroke="#321207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.125 15L4.375 16.25L6.875 13.75" stroke="#321207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
