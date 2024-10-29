import React from "react";

export default function ChevronIcon({onClick=()=>{}}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 900"
      className="w-6 h-6 self-center cursor-pointer"
      fill="currentColor"
      onClick={() => onClick()}
    >
      <rect
        width="1080"
        height="1080"
        x="-540"
        y="-540"
        rx="0"
        ry="0"
        transform="translate(540 540)"
        vectorEffect="non-scaling-stroke"
        visibility="hidden"
      ></rect>
      <rect
        width="74.92"
        height="38.83"
        x="-37.46"
        y="-19.415"
        stroke="#000"
        strokeWidth="0"
        rx="0"
        ry="0"
        transform="matrix(4.55 -4.55 2.11 2.11 528.08 410.35)"
        vectorEffect="non-scaling-stroke"
      ></rect>
      <rect
        width="74.92"
        height="38.83"
        x="-37.46"
        y="-19.415"
        stroke="#000"
        strokeWidth="0"
        rx="0"
        ry="0"
        transform="matrix(4.55 4.55 -2.11 2.11 527.99 669.65)"
        vectorEffect="non-scaling-stroke"
      ></rect>
    </svg>
  );
}
