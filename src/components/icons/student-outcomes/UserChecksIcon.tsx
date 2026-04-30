import type { SVGProps } from "react";

export function UserChecksIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" color="#E95E32" {...props}>
      <g clipPath="url(#user-checks-icon-clip)">
        <path
          d="M8.4375 12.5C11.0263 12.5 13.125 10.4013 13.125 7.8125C13.125 5.22367 11.0263 3.125 8.4375 3.125C5.84867 3.125 3.75 5.22367 3.75 7.8125C3.75 10.4013 5.84867 12.5 8.4375 12.5Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.875 15.625C3.48047 13.7148 5.74688 12.5 8.4375 12.5C11.1281 12.5 13.3945 13.7148 15 15.625"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.625 11.25L16.875 12.5L19.375 10"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="user-checks-icon-clip">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
