import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const svgDefaults = {
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

export const LightRoastIcon = (props: IconProps) => (
  <svg viewBox="0 0 5.93 8.77" {...svgDefaults} {...props}>
    <path
      d="M2.95,8.52c-2.21.06-3.53-2.39-2.1-4.3S2.85.5,2.85.5c0,0,2.94,3.42,2.83,5.44-.08,1.44-1.01,2.53-2.73,2.58Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M3.08,7.42c-.82.02-1.31-.89-.78-1.6s.75-1.39.75-1.39c0,0,1.09,1.27,1.05,2.02-.03.54-.38.94-1.02.96Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
  </svg>
);

export const MediumRoastIcon = (props: IconProps) => (
  <svg viewBox="0 0 9.98 13.45" {...svgDefaults} {...props}>
    <path
      d="M4.53,13.08c3.14.66,5.66-1.47,5.12-3.28-.53-1.77-4.27-1.84-1.12-5.32,1.08-1.2.72-2.96-.85-4.07C6.24,4.6,3.48,2.63,1.11,5.65c-1.73,2.21-.99,6.5,3.42,7.42Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M3.28,9.99c-1.14-1.68-.07-3.02,1.58-3.88-.92,2.63,2.17,2.63,2.23,3.81.07,1.18-2.56,1.91-3.81.07Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
  </svg>
);

export const DarkRoastIcon = (props: IconProps) => (
  <svg viewBox="0 0 11.16 14.8" {...svgDefaults} {...props}>
    <path
      d="M4.99,14.55c-4.66.12-6.85-4.46-2.05-6.94,3.79-1.96,3.37-2.01,2.66-3.78-.82-2.04,2.02-3.22,2.88-3.57.06-.03.11.05.06.1-.68.59-1.76,1.96,1.52,4.49,2.75,2.12-2.23,3.51-.66,4.96,2.23,2.06-1.25,4.67-4.4,4.75Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M6.26,7.89c-1.28.62-3.4,1.2-3.32,3.32.08,2.13,4.08,1.5,4.39.19s-1.34-1.69-.18-2.89c1.24-1.28,1.35-2.13.5-3.28.08,1.35-.35,2.16-1.39,2.67Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={0.5}
    />
  </svg>
);

export const BeanGrindIcon = (props: IconProps) => (
  <svg viewBox="0 0 12.49 11.44" {...svgDefaults} {...props}>
    <path
      d="M11.48,2.18c1.49,2.2.86,5.23-2.55,7.52-3.4,2.3-6.44,1.75-7.93-.45C-.48,7.06.15,4.03,3.55,1.73,6.95-.56,9.99-.02,11.48,2.18Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M.59,8.65s1.36-1.29,2.65-2.11c2.07-1.32,3.22-1.21,4.62-2.16,2.8-1.89,2.79-3.08,2.79-3.08"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M1.36,9.78s1.43-1.21,2.78-1.96c2.16-1.21,3.34-1.07,4.81-1.94,2.93-1.74,2.95-2.91,2.95-2.91"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
  </svg>
);

export const CoarseGrindIcon = (props: IconProps) => (
  <svg viewBox="0 0 13.78 9.5" {...svgDefaults} {...props}>
    <path
      d="M10.21,3.3c0,1.71-1.83,2.38-3.41,2.38s-2.31-.66-2.31-2.38S7,.25,8.58.25s1.63,1.34,1.63,3.05Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M3.59,8.31c-.87.31-1.55-.66-1.84-1.61s.33-1.61,1.2-1.92c.87-.31,1.6,1.05,1.89,1.99s-.38,1.22-1.26,1.53Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M6.08,7.33c0-.85,1.2-.91,2.24-.67s1.48,1.05,1.49,1.9-1.6.76-2.65.52c-1.04-.24-1.08-.91-1.08-1.75Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M.41,3.05C-.12,2.43.74,1.51,1.67.92s1.75-.3,2.28.33-.72,1.73-1.65,2.31-1.36.11-1.89-.51Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M12.69,2.74c.94.02.97,1.6.68,2.95-.29,1.36-1.21,1.91-2.15,1.89-.94-.02-.79-2.12-.5-3.48s1.03-1.39,1.98-1.37Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
  </svg>
);

export const FineGrindIcon = (props: IconProps) => (
  <svg viewBox="0 0 7.46 7.35" {...svgDefaults} {...props}>
    <g fill="currentColor">
      <circle cx={1.42} cy={2.53} r={0.79} />
      <circle cx={0.81} cy={5.3} r={0.79} />
      <circle cx={3.91} cy={6.55} r={0.79} />
      <circle cx={6.67} cy={4.99} r={0.79} />
      <circle cx={1.67} cy={4.07} r={0.52} />
      <circle cx={5.47} cy={0.87} r={0.52} />
      <circle cx={2.64} cy={5.6} r={0.57} />
      <circle cx={3.06} cy={2.18} r={0.47} />
      <circle cx={0.47} cy={3.65} r={0.47} />
      <circle cx={6.33} cy={3.25} r={0.47} />
      <circle cx={1.69} cy={6.46} r={0.47} />
      <circle cx={5.02} cy={5.53} r={0.47} />
      <circle cx={3.88} cy={5.07} r={0.47} />
      <circle cx={3.88} cy={0.84} r={0.79} />
      <circle cx={3.28} cy={3.7} r={0.79} />
      <circle cx={4.99} cy={2.35} r={0.79} />
      <circle cx={2.09} cy={0.79} r={0.79} />
      <circle cx={5.13} cy={4.15} r={0.68} />
    </g>
  </svg>
);

export const PanelsSurfaceIcon = (props: IconProps) => (
  <svg viewBox="0 0 11.08 10.47" {...svgDefaults} {...props}>
    <rect
      x={0.25}
      y={7.5}
      width={10.58}
      height={2.72}
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <rect
      x={0.25}
      y={0.25}
      width={10.58}
      height={2.72}
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
  </svg>
);

export const FullSurfaceIcon = (props: IconProps) => (
  <svg viewBox="0 0 11.08 10.43" {...svgDefaults} {...props}>
    <rect
      x={0.25}
      y={0.25}
      width={10.58}
      height={9.93}
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
  </svg>
);

export const BottomSurfaceIcon = (props: IconProps) => (
  <svg viewBox="0 0 11.08 4.51" {...svgDefaults} {...props}>
    <rect
      x={0.25}
      y={0.25}
      width={10.58}
      height={4.01}
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
  </svg>
);
