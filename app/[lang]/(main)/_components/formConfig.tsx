import { useTranslations } from "next-intl";
import { type ReactElement, type ReactNode, type SVGProps, useMemo } from "react";
import { z } from "zod";

import type { FontOption } from "@/components/form/FontSelectInput";
import {
  BeanGrindIcon,
  BottomSurfaceIcon,
  CoarseGrindIcon,
  DarkRoastIcon,
  FineGrindIcon,
  FullSurfaceIcon,
  LightRoastIcon,
  MediumRoastIcon,
  PanelsSurfaceIcon,
} from "@/components/icons/CustomizationIcons";

export const roastValues = ["light", "medium", "dark"] as const;
export type RoastValue = (typeof roastValues)[number];

export const grindValues = ["bean", "coarse", "fine"] as const;
export type GrindValue = (typeof grindValues)[number];

export interface OptionDefinition<TValue extends string> {
  value: TValue;
  label: string;
  icon: ReactNode;
}

const createOptionIcon = (Icon: (props: SVGProps<SVGSVGElement>) => ReactElement, size = 28) => (
  <Icon width={size} height={size} aria-hidden="true" focusable="false" />
);

export const useRoastOptions = (): readonly OptionDefinition<RoastValue>[] => {
  const t = useTranslations("home.roastOptions");

  return useMemo(
    () => [
      {
        value: "light" as const,
        label: t("light"),
        icon: createOptionIcon(LightRoastIcon),
      },
      {
        value: "medium" as const,
        label: t("medium"),
        icon: createOptionIcon(MediumRoastIcon),
      },
      {
        value: "dark" as const,
        label: t("dark"),
        icon: createOptionIcon(DarkRoastIcon),
      },
    ],
    [t]
  );
};

export const useRoastLabels = (): Record<RoastValue, string> => {
  const t = useTranslations("home.roastOptions");

  return useMemo(
    () => ({
      light: t("light"),
      medium: t("medium"),
      dark: t("dark"),
    }),
    [t]
  );
};

export const useGrindOptions = (): readonly OptionDefinition<GrindValue>[] => {
  const t = useTranslations("home.grindOptions");

  return useMemo(
    () => [
      {
        value: "fine" as const,
        label: t("fine"),
        icon: createOptionIcon(FineGrindIcon),
      },
      {
        value: "coarse" as const,
        label: t("coarse"),
        icon: createOptionIcon(CoarseGrindIcon),
      },
      {
        value: "bean" as const,
        label: t("bean"),
        icon: createOptionIcon(BeanGrindIcon),
      },
    ],
    [t]
  );
};

/**
 * @deprecated Use LayoutType instead. Kept for backward compatibility.
 */
export const surfaceValues = ["sandwich", "full", "bottom"] as const;
/**
 * @deprecated Use LayoutType instead. Kept for backward compatibility.
 */
export type SurfaceValue = (typeof surfaceValues)[number];
export const defaultSurfaceValue: SurfaceValue = "bottom";

/**
 * Layout type defines how panels are arranged on the label.
 * - "none": No panels, just body color
 * - "full": Entire label is panel color
 * - "top": Top panel only
 * - "bottom": Bottom panel only
 * - "border": Border/frame around the label (formerly called "around")
 */
export const layoutTypeValues = ["none", "full", "top", "bottom", "border"] as const;
export type LayoutType = (typeof layoutTypeValues)[number];
export const defaultLayoutType: LayoutType = "bottom";

// Template values - each template defines a complete visual layout
export const templateValues = ["brutalist", "minimal", "modern", "classic", "playful"] as const;
export type TemplateValue = (typeof templateValues)[number];
export const defaultTemplateValue: TemplateValue = "brutalist";

/**
 * Text transform options for template styling.
 */
export type TextTransform = "none" | "uppercase" | "lowercase" | "capitalize";

/**
 * Horizontal anchor point for text positioning.
 */
export type AnchorX = "left" | "center" | "right";

/**
 * Vertical anchor point for text positioning.
 */
export type AnchorY = "top" | "middle" | "bottom";

/**
 * Icon types available for templates.
 */
export type IconType = "none" | "star" | "bean" | "squares";

/**
 * Coordinate-based position for elements on the label.
 * Uses ratios (0.0 to 1.0) relative to label dimensions.
 *
 * Example:
 * - x: 0.5, y: 0.1 = center horizontally, 10% from top
 * - x: 0.0, y: 1.0 = left edge, bottom edge
 */
export interface ElementPosition {
  /** X position as ratio of label width (0.0 = left, 1.0 = right) */
  x: number;
  /** Y position as ratio of label height (0.0 = top, 1.0 = bottom) */
  y: number;
  /** Horizontal anchor point - where the text anchors from */
  anchorX: AnchorX;
  /** Vertical anchor point - where the text anchors from */
  anchorY: AnchorY;
}

/**
 * @deprecated Use ElementPosition instead. Kept for backward compatibility.
 */
export type HorizontalAlign = "left" | "center" | "right";
/**
 * @deprecated Use ElementPosition instead. Kept for backward compatibility.
 */
export type VerticalAlign = "top" | "center" | "bottom";
/**
 * @deprecated Use LayoutType instead. Kept for backward compatibility.
 */
export type PanelLocation = "top" | "bottom" | "header" | "body";

/**
 * @deprecated Use ElementPosition instead. Kept for backward compatibility.
 */
export interface TextPosition {
  /** Which panel/area the text appears in */
  panel: PanelLocation;
  /** Horizontal alignment within the panel */
  horizontalAlign: HorizontalAlign;
  /** Vertical alignment within the panel */
  verticalAlign: VerticalAlign;
}

/**
 * Accent line configuration.
 */
export interface AccentLineConfig {
  /** Whether the accent line is visible */
  visible: boolean;
  /** Position as ratio (0.0 = left, 1.0 = right) */
  x: number;
  /** Color of the accent line */
  color: string;
  /** Height as ratio of label height (0.0 to 1.0) */
  heightRatio?: number;
}

/**
 * Icon configuration for templates.
 */
export interface IconConfig {
  /** Type of icon to display */
  type: IconType;
  /** Position using coordinate-based system */
  position: ElementPosition;
  /** Icon size as ratio of label width (default ~0.05) */
  sizeRatio?: number;
}

/**
 * Panel configuration for a single panel.
 */
export interface PanelConfig {
  /** Whether this panel is visible */
  visible: boolean;
  /** Height as a ratio of label height (0.0 to 1.0) */
  heightRatio: number;
}

/**
 * Border panel configuration - draws a frame around the entire label.
 */
export interface BorderPanelConfig {
  /** Whether the border is visible */
  visible: boolean;
  /** Thickness of left/right sides as ratio of label width (0.0 to 1.0) */
  sideThicknessRatio: number;
  /** Thickness of top/bottom edges as ratio of label height (0.0 to 1.0). Defaults to sideThicknessRatio if not specified. */
  edgeThicknessRatio?: number;
}

/**
 * Template preset configurations.
 * Each template defines a complete visual layout including:
 * - Layout type and panel configurations
 * - Color scheme (panel, text, body, accent)
 * - Typography (font, weight, transform)
 * - Element positions (coordinate-based)
 * - Decorative elements (accent lines, icons)
 */
export interface TemplatePreset {
  // Layout type - primary way to define panel arrangement
  /** How panels are arranged: "none" | "full" | "top" | "bottom" | "border" */
  layoutType: LayoutType;

  // Panel configurations - fine-grained control over panel dimensions
  /** Top panel configuration */
  topPanel: PanelConfig;
  /** Bottom panel configuration */
  bottomPanel: PanelConfig;
  /** Border panel - draws a frame around the entire label */
  borderPanel?: BorderPanelConfig;

  // Colors
  panelColor: string;
  nameColor: string;
  /** Secondary text color (e.g., for roast/weight if different from name) */
  secondaryTextColor?: string;
  /** Body/background color for split-panel designs */
  bodyColor?: string;
  /** Accent color (for lines, highlights) */
  accentColor?: string;

  // Typography
  labelFont: FontValue;
  /** Font weight for the name text */
  nameFontWeight: FontWeightValue;
  /** Font weight for secondary text (roast/weight). Defaults to nameFontWeight if not specified. */
  secondaryFontWeight?: FontWeightValue;
  /** Text transform for all label text */
  textTransform: TextTransform;
  /** Whether name should be italic */
  nameItalic?: boolean;
  /** Font size multiplier for the name (1.0 = default, larger = bigger) */
  nameFontSizeMultiplier?: number;
  /** Font size multiplier for roast/weight text (1.0 = default) */
  secondaryFontSizeMultiplier?: number;

  // Element positions - coordinate-based (x, y as ratios 0.0-1.0)
  /** Position of the name text */
  namePosition: ElementPosition;
  /** Position of the roast text */
  roastPosition: ElementPosition;
  /** Position of the weight text */
  weightPosition: ElementPosition;

  // Accent line
  accentLine: AccentLineConfig;

  // Icon
  icon: IconConfig;

  /**
   * @deprecated Use layoutType instead. Kept for backward compatibility.
   */
}

/**
 * Template presets matching the 5 design mockups.
 * All positions use coordinate-based system (x, y as ratios 0.0-1.0).
 */
export const TEMPLATE_PRESETS: Record<TemplateValue, TemplatePreset> = {
  /**
   * Brutalist: High-contrast black & white with italic serif typography.
   * - Border frame around entire label (hollow square)
   * - Name centered at top of frame
   * - Roast + weight centered at bottom of frame
   */
  brutalist: {
    layoutType: "border",
    topPanel: { visible: false, heightRatio: 0 },
    bottomPanel: { visible: false, heightRatio: 0 },
    // Left/right sides thicker than top/bottom
    borderPanel: { visible: true, sideThicknessRatio: 0.14, edgeThicknessRatio: 0.12 },
    panelColor: "#000000",
    nameColor: "#FFFFFF",
    bodyColor: "#696969",
    labelFont: "source-serif",
    nameFontWeight: "500",
    secondaryFontWeight: "400",
    textTransform: "capitalize",
    nameFontSizeMultiplier: 2.8,
    secondaryFontSizeMultiplier: 1,
    // Name at top-center of border frame
    namePosition: { x: 0.5, y: 0.125, anchorX: "center", anchorY: "middle" },
    // Roast centered at bottom of border frame
    roastPosition: { x: 0.35, y: 0.94, anchorX: "center", anchorY: "middle" },
    // Weight next to roast (slightly offset)
    weightPosition: { x: 0.7, y: 0.94, anchorX: "center", anchorY: "middle" },
    accentLine: { visible: false, x: 0.5, color: "#000000" },
    icon: { type: "none", position: { x: 0.9, y: 0.06, anchorX: "center", anchorY: "middle" } },
  },

  /**
   * Minimal: Clean blue background with lowercase sans-serif.
   * - Full panel (entire label is the panel color)
   * - Name at top-left
   * - Roast + weight stacked at bottom-right
   * - Squares icon near bottom-right
   */
  minimal: {
    layoutType: "full",
    topPanel: { visible: false, heightRatio: 0 },
    bottomPanel: { visible: false, heightRatio: 0 },
    panelColor: "#1565C0",
    bodyColor: "#1565C0",
    nameColor: "#000000",
    labelFont: "pt-sans",
    nameFontWeight: "700",
    secondaryFontWeight: "700",
    textTransform: "lowercase",
    nameItalic: false,
    nameFontSizeMultiplier: 0.7,
    secondaryFontSizeMultiplier: 0.7,
    // Name at top-left with padding
    namePosition: { x: 0.01, y: 0.25, anchorX: "left", anchorY: "top" },
    // Roast at bottom-right
    roastPosition: { x: 0.99, y: 0.8, anchorX: "right", anchorY: "bottom" },
    // Weight stacked below roast
    weightPosition: { x: 0.99, y: 0.9, anchorX: "right", anchorY: "bottom" },
    accentLine: { visible: false, x: 0.5, color: "#000000" },
    icon: {
      type: "none",
      position: { x: 0.95, y: 0.72, anchorX: "right", anchorY: "bottom" },
    },
  },

  /**
   * Modern: Bold orange with white bottom info bar.
   * - Thin bottom bar (white) for all text
   * - Body fills with orange
   * - Star icon at top-right of body
   */
  modern: {
    layoutType: "bottom",
    topPanel: { visible: false, heightRatio: 0 },
    bottomPanel: { visible: true, heightRatio: 0.08 },
    panelColor: "#FFFFFF",
    nameColor: "#FF5500",
    bodyColor: "#FF5500",
    labelFont: "space-mono",
    nameFontWeight: "700", // Space Mono only has 400 and 700
    secondaryFontWeight: "700",
    textTransform: "uppercase",
    nameItalic: false,
    nameFontSizeMultiplier: 0.5,
    secondaryFontSizeMultiplier: 0.5,
    // Name at left of bottom panel
    namePosition: { x: 0.02, y: 0.95, anchorX: "left", anchorY: "middle" },
    // Roast centered in bottom panel
    roastPosition: { x: 0.7, y: 0.95, anchorX: "center", anchorY: "middle" },
    // Weight at right of bottom panel
    weightPosition: { x: 0.95, y: 0.95, anchorX: "right", anchorY: "middle" },
    accentLine: { visible: false, x: 0.5, color: "#FFFFFF" },
    icon: {
      type: "none",
      position: { x: 0.9, y: 0.1, anchorX: "right", anchorY: "top" },
    },
  },

  /**
   * Classic: Elegant black header bar on clean white.
   * - Thin top bar (black header) with all info
   * - Body fills with white
   */
  classic: {
    layoutType: "top",
    topPanel: { visible: true, heightRatio: 0.12 },
    bottomPanel: { visible: false, heightRatio: 0 },
    panelColor: "#000000",
    nameColor: "#FFFFFF",
    bodyColor: "#FFFFFF",
    labelFont: "space-mono",
    nameFontWeight: "700", // Space Mono only has 400 and 700
    secondaryFontWeight: "700",
    textTransform: "capitalize",
    nameItalic: false,
    nameFontSizeMultiplier: 0.8,
    secondaryFontSizeMultiplier: 0.4,
    // Name at left of top panel
    namePosition: { x: 0.025, y: 0.065, anchorX: "left", anchorY: "middle" },
    // Roast at right of top panel
    roastPosition: { x: 0.85, y: 0.065, anchorX: "right", anchorY: "middle" },
    // Weight at far right
    weightPosition: { x: 0.95, y: 0.065, anchorX: "right", anchorY: "middle" },
    accentLine: { visible: false, x: 0.5, color: "#000000" },
    icon: { type: "none", position: { x: 0.5, y: 0.05, anchorX: "center", anchorY: "middle" } },
  },

  /**
   * Playful: Vibrant pink header on warm beige body.
   * - Thicker top band (pink) with name
   * - Roast/weight in body below the band
   */
  playful: {
    layoutType: "top",
    topPanel: { visible: true, heightRatio: 0.28 },
    bottomPanel: { visible: false, heightRatio: 0 },
    panelColor: "#ff7cc2",
    nameColor: "#CECCA5",
    bodyColor: "#CECCA5",
    secondaryTextColor: "#CECCA5",
    labelFont: "inknut-antiqua",
    nameFontWeight: "700",
    secondaryFontWeight: "400",
    textTransform: "capitalize",
    nameItalic: false,
    nameFontSizeMultiplier: 1.3,
    secondaryFontSizeMultiplier: 0.5,
    // Name at top-left within the pink panel
    namePosition: { x: 0.02, y: 0.1, anchorX: "left", anchorY: "middle" },
    // Roast below the panel, in body area
    roastPosition: { x: 0.03, y: 0.17, anchorX: "left", anchorY: "top" },
    // Weight on right side of body
    weightPosition: { x: 0.97, y: 0.17, anchorX: "right", anchorY: "top" },
    accentLine: { visible: false, x: 0.5, color: "#000000" },
    icon: { type: "none", position: { x: 0.05, y: 0.22, anchorX: "left", anchorY: "bottom" } },
  },
};

/**
 * Get the layout type for a template.
 */
export const getTemplateLayoutType = (template: TemplateValue): LayoutType => {
  return TEMPLATE_PRESETS[template]?.layoutType ?? defaultLayoutType;
};

/**
 * @deprecated Use getTemplateLayoutType instead.
 * Maps layoutType to legacy surfaceValue for backward compatibility.
 */
export const getTemplateSurfaceLayout = (template: TemplateValue): SurfaceValue => {
  const layoutType = getTemplateLayoutType(template);
  // Map new layoutType to legacy surfaceValue
  switch (layoutType) {
    case "border":
      return "sandwich"; // Border frames were rendered like sandwich
    case "full":
      return "full";
    case "top":
      return "sandwich"; // Top-only uses sandwich logic
    case "bottom":
      return "bottom";
    case "none":
    default:
      return defaultSurfaceValue;
  }
};

/**
 * Get the full preset for a template.
 */
export const getTemplatePreset = (template: TemplateValue): TemplatePreset => {
  return TEMPLATE_PRESETS[template] ?? TEMPLATE_PRESETS[defaultTemplateValue];
};

export const fontWeightValues = ["100", "200", "300", "400", "500", "600", "700", "800", "900"] as const;
export type FontWeightValue = (typeof fontWeightValues)[number];
export const defaultFontWeightValue: FontWeightValue = "400";

export const fontSizeValues = ["s", "m", "l"] as const;
export type FontSizeValue = (typeof fontSizeValues)[number];
export const defaultFontSizeValue: FontSizeValue = "m";

export const FONT_SIZE_MULTIPLIERS: Record<FontSizeValue, number> = {
  s: 0.75,
  m: 1,
  l: 1.25,
};

export const fontValues = [
  // Sans-serif
  "dm-sans",
  "inter",
  "poppins",
  "manrope",
  "alegreya-sans",
  "archivo-narrow",
  "chivo",
  "fira-sans",
  "ibm-plex-sans",
  "karla",
  "libre-franklin",
  "montserrat",
  "open-sans",
  "proza-libre",
  "pt-sans",
  "raleway",
  "roboto",
  "rubik",
  "source-sans",
  "work-sans",
  // Serif
  "playfair-display",
  "lora",
  "libre-baskerville",
  "alegreya",
  "cardo",
  "cormorant",
  "eczar",
  "neuton",
  "pt-serif",
  "source-serif",
  "spectral",
  // Display
  "fraunces",
  "space-grotesk",
  "bio-rhyme",
  "inknut-antiqua",
  "syne",
  // Monospace
  "inconsolata",
  "space-mono",
] as const;
export type FontValue = (typeof fontValues)[number];
export const defaultFontValue: FontValue = "dm-sans";

const FONT_DEFINITIONS: Record<
  FontValue,
  { label: string; fontFamily: string; category: FontOption["category"] }
> = {
  // Sans-serif
  "dm-sans": { label: "DM Sans", fontFamily: "var(--font-dm-sans)", category: "sans-serif" },
  inter: { label: "Inter", fontFamily: "var(--font-inter)", category: "sans-serif" },
  poppins: { label: "Poppins", fontFamily: "var(--font-poppins)", category: "sans-serif" },
  manrope: { label: "Manrope", fontFamily: "var(--font-manrope)", category: "sans-serif" },
  "alegreya-sans": {
    label: "Alegreya Sans",
    fontFamily: "var(--font-alegreya-sans)",
    category: "sans-serif",
  },
  "archivo-narrow": {
    label: "Archivo Narrow",
    fontFamily: "var(--font-archivo-narrow)",
    category: "sans-serif",
  },
  chivo: { label: "Chivo", fontFamily: "var(--font-chivo)", category: "sans-serif" },
  "fira-sans": { label: "Fira Sans", fontFamily: "var(--font-fira-sans)", category: "sans-serif" },
  "ibm-plex-sans": {
    label: "IBM Plex Sans",
    fontFamily: "var(--font-ibm-plex-sans)",
    category: "sans-serif",
  },
  karla: { label: "Karla", fontFamily: "var(--font-karla)", category: "sans-serif" },
  "libre-franklin": {
    label: "Libre Franklin",
    fontFamily: "var(--font-libre-franklin)",
    category: "sans-serif",
  },
  montserrat: { label: "Montserrat", fontFamily: "var(--font-montserrat)", category: "sans-serif" },
  "open-sans": { label: "Open Sans", fontFamily: "var(--font-open-sans)", category: "sans-serif" },
  "proza-libre": { label: "Proza Libre", fontFamily: "var(--font-proza-libre)", category: "sans-serif" },
  "pt-sans": { label: "PT Sans", fontFamily: "var(--font-pt-sans)", category: "sans-serif" },
  raleway: { label: "Raleway", fontFamily: "var(--font-raleway)", category: "sans-serif" },
  roboto: { label: "Roboto", fontFamily: "var(--font-roboto)", category: "sans-serif" },
  rubik: { label: "Rubik", fontFamily: "var(--font-rubik)", category: "sans-serif" },
  "source-sans": { label: "Source Sans", fontFamily: "var(--font-source-sans)", category: "sans-serif" },
  "work-sans": { label: "Work Sans", fontFamily: "var(--font-work-sans)", category: "sans-serif" },
  // Serif
  "playfair-display": {
    label: "Playfair Display",
    fontFamily: "var(--font-playfair-display)",
    category: "serif",
  },
  lora: { label: "Lora", fontFamily: "var(--font-lora)", category: "serif" },
  "libre-baskerville": {
    label: "Libre Baskerville",
    fontFamily: "var(--font-libre-baskerville)",
    category: "serif",
  },
  alegreya: { label: "Alegreya", fontFamily: "var(--font-alegreya)", category: "serif" },
  cardo: { label: "Cardo", fontFamily: "var(--font-cardo)", category: "serif" },
  cormorant: { label: "Cormorant", fontFamily: "var(--font-cormorant)", category: "serif" },
  eczar: { label: "Eczar", fontFamily: "var(--font-eczar)", category: "serif" },
  neuton: { label: "Neuton", fontFamily: "var(--font-neuton)", category: "serif" },
  "pt-serif": { label: "PT Serif", fontFamily: "var(--font-pt-serif)", category: "serif" },
  "source-serif": { label: "Source Serif", fontFamily: "var(--font-source-serif)", category: "serif" },
  spectral: { label: "Spectral", fontFamily: "var(--font-spectral)", category: "serif" },
  // Display
  fraunces: { label: "Fraunces", fontFamily: "var(--font-fraunces)", category: "display" },
  "space-grotesk": { label: "Space Grotesk", fontFamily: "var(--font-space-grotesk)", category: "display" },
  "bio-rhyme": { label: "BioRhyme", fontFamily: "var(--font-bio-rhyme)", category: "display" },
  "inknut-antiqua": {
    label: "Inknut Antiqua",
    fontFamily: "var(--font-inknut-antiqua)",
    category: "display",
  },
  syne: { label: "Syne", fontFamily: "var(--font-syne)", category: "display" },
  // Monospace
  inconsolata: { label: "Inconsolata", fontFamily: "var(--font-inconsolata)", category: "monospace" },
  "space-mono": { label: "Space Mono", fontFamily: "var(--font-space-mono)", category: "monospace" },
};

export const useFontOptions = (): readonly FontOption[] => {
  return useMemo(
    () =>
      fontValues.map((value) => ({
        value,
        label: FONT_DEFINITIONS[value].label,
        fontFamily: FONT_DEFINITIONS[value].fontFamily,
        category: FONT_DEFINITIONS[value].category,
      })),
    []
  );
};

export const getFontFamily = (fontValue: FontValue | undefined): string => {
  if (!fontValue || !FONT_DEFINITIONS[fontValue]) {
    return FONT_DEFINITIONS[defaultFontValue].fontFamily;
  }
  return FONT_DEFINITIONS[fontValue].fontFamily;
};

export interface SelectOption {
  value: string;
  label: string;
}

export const useFontWeightOptions = (): readonly SelectOption[] => {
  const t = useTranslations("home.fontWeightOptions");

  return useMemo(
    () =>
      fontWeightValues.map((value) => ({
        value,
        label: t(value),
      })),
    [t]
  );
};

export const useFontSizeOptions = (): readonly OptionDefinition<FontSizeValue>[] => {
  const t = useTranslations("home.fontSizeOptions");

  return useMemo(
    () => [
      {
        value: "s" as const,
        label: t("s"),
        icon: <span style={{ fontSize: "0.75em", fontWeight: 600 }}>Aa</span>,
      },
      {
        value: "m" as const,
        label: t("m"),
        icon: <span style={{ fontSize: "1em", fontWeight: 600 }}>Aa</span>,
      },
      {
        value: "l" as const,
        label: t("l"),
        icon: <span style={{ fontSize: "1.25em", fontWeight: 600 }}>Aa</span>,
      },
    ],
    [t]
  );
};

/**
 * @deprecated Use useTemplateOptions instead. Surface options are no longer used.
 */
export const useSurfaceOptions = (): readonly OptionDefinition<SurfaceValue>[] => {
  const t = useTranslations("home.surfaceOptions");

  return useMemo(
    () => [
      {
        value: "sandwich" as const,
        label: t("sandwich"),
        icon: createOptionIcon(PanelsSurfaceIcon, 30),
      },
      {
        value: "full" as const,
        label: t("full"),
        icon: createOptionIcon(FullSurfaceIcon, 30),
      },
      {
        value: "bottom" as const,
        label: t("bottom"),
        icon: createOptionIcon(BottomSurfaceIcon, 30),
      },
    ],
    [t]
  );
};

export const useTemplateOptions = (): readonly OptionDefinition<TemplateValue>[] => {
  const t = useTranslations("home.templateOptions");

  return useMemo(
    () => [
      {
        value: "brutalist" as const,
        label: t("brutalist"),
        icon: createOptionIcon(PanelsSurfaceIcon, 30),
      },
      {
        value: "minimal" as const,
        label: t("minimal"),
        icon: createOptionIcon(FullSurfaceIcon, 30),
      },
      {
        value: "modern" as const,
        label: t("modern"),
        icon: createOptionIcon(BottomSurfaceIcon, 30),
      },
      {
        value: "classic" as const,
        label: t("classic"),
        icon: createOptionIcon(PanelsSurfaceIcon, 30),
      },
      {
        value: "playful" as const,
        label: t("playful"),
        icon: createOptionIcon(PanelsSurfaceIcon, 30),
      },
    ],
    [t]
  );
};

/**
 * @deprecated Surface descriptions are no longer used. Templates provide their own styling.
 */
export const useSurfaceDescriptions = (): Record<SurfaceValue, string> => {
  const t = useTranslations("home.surfaceDescriptions");

  return useMemo(
    () => ({
      sandwich: t("sandwich"),
      full: t("full"),
      bottom: t("bottom"),
    }),
    [t]
  );
};

export const getOptionLabel = <TValue extends string>(
  value: TValue | undefined,
  options: readonly OptionDefinition<TValue>[]
) => options.find((option) => option.value === value)?.label;

export const hexColorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
export const defaultNameColor = "#111827";
export const defaultPanelColor = "#F97316";

export const sanitizeHexColor = (color: string | undefined, fallback = defaultNameColor): string => {
  if (!color) return fallback;
  const trimmed = color.trim();
  return hexColorRegex.test(trimmed) ? trimmed : fallback;
};

const isFileLike = (value: unknown): value is File => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  if (typeof File !== "undefined" && value instanceof File) {
    return true;
  }

  const possibleFile = value as Record<string, unknown>;
  return (
    typeof possibleFile.name === "string" &&
    typeof possibleFile.size === "number" &&
    typeof possibleFile.type === "string"
  );
};

// Note: Zod validation messages are kept in English as they're runtime-validated
// and would require a more complex setup to translate dynamically.
// For full i18n of validation, consider using zod-i18n-map or similar.
const fileSchema = z.custom<File>((value) => isFileLike(value), {
  message: "Upload a valid artwork file",
});

export const customizationFormSchema = z.object({
  customerName: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be 50 characters or fewer"),
  nameColor: z.string().regex(hexColorRegex, { message: "Enter a valid hex color (for example #111827)" }),
  labelFont: z.enum(fontValues, { message: "Select a font" }),
  labelFontWeight: z.enum(fontWeightValues, { message: "Select a font weight" }),
  labelFontSize: z.enum(fontSizeValues, { message: "Select a font size" }),
  roastProfile: z.enum(roastValues, { message: "Select a roast profile" }),
  grindSetting: z.enum(grindValues, { message: "Select a grind setting" }),
  template: z.enum(templateValues, { message: "Choose a template" }),
  panelColor: z.string().regex(hexColorRegex, { message: "Enter a valid panel color (for example #f3ebe1)" }),
  quantity: z.number().int({ message: "Quantity must be a whole number" }).min(1, "Select at least 1 bag"),
  artworkFile: z
    .array(fileSchema)
    .min(1, "Upload your bag artwork")
    .max(1, "Only one artwork file is allowed"),
});

export type CustomizationFormValues = z.infer<typeof customizationFormSchema>;

export const formatPreviewValue = (value: string | undefined, placeholder: string) =>
  value && value.trim().length > 0 ? value : placeholder;
