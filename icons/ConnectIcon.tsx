import * as React from "react";
import { SVGProps } from "react";

const SvgLoginIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    {...props}
  >
    <defs>
      <linearGradient
        id="LoginIcon_svg__a"
        x1={10}
        y1={32}
        x2={54}
        y2={32}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#17a6d7" />
        <stop offset={1} stopColor="#9d31fe" />
      </linearGradient>
      <linearGradient
        id="LoginIcon_svg__b"
        x1={30}
        y1={32.01}
        x2={34}
        y2={32.01}
        xlinkHref="#LoginIcon_svg__a"
      />
    </defs>
    <g data-name="Layer 3">
      <path
        d="M52.22 5.33 23.78 2.14a2 2 0 0 0-2.22 2V6H12a2 2 0 0 0-2 2v48a2 2 0 0 0 2 2h9.56v1.89a2 2 0 0 0 2 2c.2 0 28.44-3.18 28.66-3.2a2 2 0 0 0 1.78-2V7.31a2 2 0 0 0-1.78-1.98ZM14 54V10h7.56v44Zm36 .92-24.44 2.71V6.37L50 9.1Z"
        style={{
          fill: "url(#LoginIcon_svg__a)",
        }}
      />
      <path
        d="M32 36.56a2 2 0 0 0 2-2v-5.12a2 2 0 0 0-4 0v5.12a2 2 0 0 0 2 2Z"
        style={{
          fill: "url(#LoginIcon_svg__b)",
        }}
      />
    </g>
  </svg>
);

export default SvgLoginIcon;
