import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const svgDefaults = {
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

export const UploadIcon = (props: IconProps) => (
  <svg viewBox="0 0 15.59 11.93" {...svgDefaults} {...props}>
    <path
      d="M15.04,5.36L8.01.33c-.14-.1-.3-.1-.44,0L.54,5.36c-.49.35-.32,1.46.22,1.46h2.03c.28,0,.51.34.51.77v3.33c0,.42.23.77.51.77h7.83c.28,0,.51-.34.51-.77v-3.33c0-.42.23-.77.51-.77h2.15c.54,0,.71-1.1.22-1.46Z"
      stroke="currentColor"
      strokeWidth={0.5}
      strokeMiterlimit={10}
      fill="none"
      opacity={1}
    />
  </svg>
);
