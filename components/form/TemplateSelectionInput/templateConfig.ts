import type { CSSProperties } from "react";

import type {
  SurfaceValue,
  FontValue,
  FontSizeValue,
  FontWeightValue,
} from "@/app/[lang]/(main)/_components/formConfig";

/**
 * Text positioning configuration for template elements.
 * Values are relative to the card container.
 */
export interface TextPosition {
  /** Horizontal alignment: 'left' | 'center' | 'right' */
  align: CSSProperties["textAlign"];
  /** Vertical position from top (CSS value, e.g., '50%', '16px') */
  top?: string;
  /** Vertical position from bottom (CSS value) */
  bottom?: string;
  /** Left offset (CSS value) */
  left?: string;
  /** Right offset (CSS value) */
  right?: string;
}

/**
 * Font configuration for a template element.
 * These are defaults that can be overridden by form values.
 */
export interface TemplateFontConfig {
  /** Default font family (CSS var reference, e.g., 'var(--font-dm-sans)') */
  fontFamily: string;
  /** Default font size (CSS value, e.g., '0.625rem') */
  fontSize: string;
  /** Default font weight */
  fontWeight: FontWeightValue;
  /** Default text color (hex) */
  color: string;
  /** Text transform */
  textTransform?: CSSProperties["textTransform"];
  /** Letter spacing */
  letterSpacing?: string;
}

/**
 * Configuration for text elements within a template card.
 */
export interface TemplateTextConfig {
  /** Font configuration */
  font: TemplateFontConfig;
  /** Position configuration */
  position: TextPosition;
}

/**
 * Complete configuration for a single template.
 * Each template can have unique styling and positioning.
 */
export interface TemplateConfig {
  /** Configuration for the template number (01, 02, etc.) */
  number: TemplateTextConfig;
  /** Configuration for the roast label text */
  roast: TemplateTextConfig;
  /** Configuration for the weight label text */
  weight: TemplateTextConfig;
}

/**
 * Default font configuration shared across templates.
 * Modify these to change the baseline styling.
 */
const DEFAULT_FONT_CONFIG: TemplateFontConfig = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: "0.625rem",
  fontWeight: "500",
  color: "#6b7280", // gray-500
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

/**
 * Default position for centered text.
 */
const CENTERED_POSITION: TextPosition = {
  align: "center",
};

/**
 * Creates a template config with sensible defaults.
 * Override specific properties as needed for each template.
 */
const createTemplateConfig = (overrides?: Partial<TemplateConfig>): TemplateConfig => ({
  number: {
    font: {
      fontFamily: "var(--font-dm-sans)",
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "#6b7280",
    },
    position: CENTERED_POSITION,
    ...overrides?.number,
  },
  roast: {
    font: {
      ...DEFAULT_FONT_CONFIG,
      ...overrides?.roast?.font,
    },
    position: {
      ...CENTERED_POSITION,
      ...overrides?.roast?.position,
    },
  },
  weight: {
    font: {
      ...DEFAULT_FONT_CONFIG,
      fontWeight: "600",
      textTransform: "none",
      letterSpacing: "0",
      ...overrides?.weight?.font,
    },
    position: {
      ...CENTERED_POSITION,
      ...overrides?.weight?.position,
    },
  },
});

/**
 * Template configurations keyed by surface value.
 * Add new templates here with their unique configurations.
 *
 * Currently all templates share the same config, but this structure
 * allows for easy per-template customization.
 */
export const TEMPLATE_CONFIGS: Record<SurfaceValue, TemplateConfig> = {
  sandwich: createTemplateConfig({
    // Sandwich template - can customize here
    // Example: roast: { font: { fontSize: "0.7rem" }, position: { align: "left" } }
  }),
  full: createTemplateConfig({
    // Full template - can customize here
  }),
  bottom: createTemplateConfig({
    // Bottom template - can customize here
  }),
};

/**
 * Gets the template config for a given surface value.
 * Falls back to 'bottom' config if not found.
 */
export const getTemplateConfig = (surfaceValue: SurfaceValue): TemplateConfig => {
  return TEMPLATE_CONFIGS[surfaceValue] ?? TEMPLATE_CONFIGS.bottom;
};

/**
 * Maps FontValue to CSS font-family string.
 */
export const FONT_FAMILY_MAP: Partial<Record<FontValue, string>> = {
  "dm-sans": "var(--font-dm-sans)",
  inter: "var(--font-inter)",
  poppins: "var(--font-poppins)",
  manrope: "var(--font-manrope)",
  "alegreya-sans": "var(--font-alegreya-sans)",
  "archivo-narrow": "var(--font-archivo-narrow)",
  chivo: "var(--font-chivo)",
  "fira-sans": "var(--font-fira-sans)",
  "ibm-plex-sans": "var(--font-ibm-plex-sans)",
  karla: "var(--font-karla)",
  "libre-franklin": "var(--font-libre-franklin)",
  montserrat: "var(--font-montserrat)",
  "open-sans": "var(--font-open-sans)",
  "proza-libre": "var(--font-proza-libre)",
  "pt-sans": "var(--font-pt-sans)",
  raleway: "var(--font-raleway)",
  roboto: "var(--font-roboto)",
  rubik: "var(--font-rubik)",
  "source-sans": "var(--font-source-sans)",
  "work-sans": "var(--font-work-sans)",
  "playfair-display": "var(--font-playfair-display)",
  lora: "var(--font-lora)",
  "libre-baskerville": "var(--font-libre-baskerville)",
  alegreya: "var(--font-alegreya)",
  cardo: "var(--font-cardo)",
  cormorant: "var(--font-cormorant)",
  eczar: "var(--font-eczar)",
  neuton: "var(--font-neuton)",
  "pt-serif": "var(--font-pt-serif)",
  "source-serif": "var(--font-source-serif)",
  spectral: "var(--font-spectral)",
  fraunces: "var(--font-fraunces)",
  "space-grotesk": "var(--font-space-grotesk)",
  "bio-rhyme": "var(--font-bio-rhyme)",
  "inknut-antiqua": "var(--font-inknut-antiqua)",
  syne: "var(--font-syne)",
  inconsolata: "var(--font-inconsolata)",
  "space-mono": "var(--font-space-mono)",
};

/**
 * Maps FontSizeValue to a size multiplier for template text.
 */
export const FONT_SIZE_SCALE: Record<FontSizeValue, number> = {
  s: 0.85,
  m: 1,
  l: 1.15,
};

/**
 * Computes the effective font family from form value or falls back to template default.
 */
export const getEffectiveFontFamily = (
  formValue: FontValue | undefined,
  templateDefault: string
): string => {
  if (formValue) {
    const fontFamily = FONT_FAMILY_MAP[formValue];
    if (fontFamily) {
      return fontFamily;
    }
  }
  return templateDefault;
};

/**
 * Computes the effective font size by applying the scale to the base size.
 */
export const getEffectiveFontSize = (
  baseSizeRem: number,
  sizeValue: FontSizeValue | undefined
): string => {
  const scale = sizeValue ? FONT_SIZE_SCALE[sizeValue] : 1;
  return `${baseSizeRem * scale}rem`;
};
