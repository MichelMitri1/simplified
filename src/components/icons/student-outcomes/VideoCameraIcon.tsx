import type { SVGProps } from "react";

export function VideoCameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#video-camera-icon-clip)">
        <path
          d="M15 5H2.5C2.15482 5 1.875 5.27982 1.875 5.625V14.375C1.875 14.7202 2.15482 15 2.5 15H15C15.3452 15 15.625 14.7202 15.625 14.375V5.625C15.625 5.27982 15.3452 5 15 5Z"
          stroke="#E95E32"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.625 8.75L19.375 6.25V13.75L15.625 11.25"
          stroke="#E95E32"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="video-camera-icon-clip">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
