import * as React from "react";
import { SVGProps } from "react";

const SvgOpenessLogoActive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={64}
    height={64}
    viewBox="0 0 16.933 16.933"
    {...props}
  >
    <defs>
      <linearGradient id="OpenessLogoActive_svg__a">
        <stop
          offset={0}
          style={{
            stopColor: "#06bcc1",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#66c184",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#OpenessLogoActive_svg__a"
        id="OpenessLogoActive_svg__b"
        gradientUnits="userSpaceOnUse"
        x1={2.901}
        y1={283.289}
        x2={14.222}
        y2={293.164}
        spreadMethod="pad"
        gradientTransform="matrix(.9197 0 0 .9197 .68 23.167)"
      />
    </defs>
    <circle
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "url(#OpenessLogoActive_svg__b)",
        strokeWidth: 3.67770839,
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      cx={8.467}
      cy={288.533}
      r={5.953}
      transform="translate(0 -280.067)"
    />
  </svg>
);

export default SvgOpenessLogoActive;
