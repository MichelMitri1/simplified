import type { SVGProps } from "react";

export function MoneyWavyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" color="#E95E32" {...props}>
      <g clipPath="url(#money-wavy-icon-clip)">
        <path
          d="M18.75 14.5929C11.5906 18.0905 8.40937 11.2843 1.25 14.782V5.40695C8.40937 1.90929 11.5906 8.71555 18.75 5.21789V14.5929Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 11.875C11.0355 11.875 11.875 11.0355 11.875 10C11.875 8.96447 11.0355 8.125 10 8.125C8.96447 8.125 8.125 8.96447 8.125 10C8.125 11.0355 8.96447 11.875 10 11.875Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.75 7.5V11.25"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.25 8.75V12.5"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="money-wavy-icon-clip">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
