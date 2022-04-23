import * as React from "react";
import { SVGProps } from "react";

const SvgOpenessLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    viewBox="0 0 16.933 16.933"
    {...props}
  >
    <circle
      style={{
        fill: "none",
        fillOpacity: 0.94117647,
        stroke: "#afafaf",
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

export default SvgOpenessLogo;
