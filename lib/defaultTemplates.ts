import type {
  SurfaceValue,
  FontValue,
  FontWeightValue,
} from "@/app/[lang]/(main)/_components/formConfig";

/**
 * Default template preset configuration.
 * Each template defines visual styling that gets applied to the form.
 */
export interface DefaultTemplate {
  /** Unique identifier for the template */
  id: string;
  /** Display name for the template */
  name: string;
  /** Surface layout type */
  surfaceLayout: SurfaceValue;
  /** Panel/header background color */
  panelColor: string;
  /** Text color for coffee name */
  nameColor: string;
  /** Font family for labels */
  labelFont: FontValue;
  /** Font weight */
  labelFontWeight: FontWeightValue;
  /** Visual styling for template preview */
  preview: TemplatePreviewStyle;
}

/**
 * Visual styling configuration for template preview cards.
 * These define how each template looks in the selection UI.
 */
export interface TemplatePreviewStyle {
  /** Background color for the main body area */
  bodyColor: string;
  /** Header/panel background color */
  headerColor: string;
  /** Text color in header */
  headerTextColor: string;
  /** Accent line color (vertical divider) */
  accentColor: string;
  /** Secondary accent color (for decorative elements) */
  secondaryAccentColor?: string;
  /** Whether to show grid pattern in body */
  showGrid: boolean;
  /** Whether coffee name should be italic */
  isItalic: boolean;
  /** Whether text should be uppercase */
  isUppercase: boolean;
  /** Whether text should be lowercase */
  isLowercase: boolean;
  /** Special icon to display (e.g., "star", "coffee") */
  icon?: "star" | "coffee" | "squares";
  /** Corner accent style */
  cornerAccents?: boolean;
}

/**
 * Template 1: BRUTALIST
 * Black panels with red accent lines, grey body with grid.
 * Uses Source Serif 4 Medium for an elegant yet bold look.
 */
const brutalistTemplate: DefaultTemplate = {
  id: "brutalist",
  name: "Brutalist",
  surfaceLayout: "sandwich",
  panelColor: "#000000",
  nameColor: "#FFFFFF",
  labelFont: "source-serif",
  labelFontWeight: "500",
  preview: {
    bodyColor: "#808080",
    headerColor: "#000000",
    headerTextColor: "#FFFFFF",
    accentColor: "#FF4500",
    showGrid: true,
    isItalic: true,
    isUppercase: false,
    isLowercase: false,
    cornerAccents: true,
  },
};

/**
 * Template 2: MINIMAL
 * Solid royal blue background with clean typography.
 * Uses PT Sans Bold for a modern, readable aesthetic.
 */
const minimalTemplate: DefaultTemplate = {
  id: "minimal",
  name: "Minimal",
  surfaceLayout: "full",
  panelColor: "#0052CC",
  nameColor: "#FFFFFF",
  labelFont: "pt-sans",
  labelFontWeight: "700",
  preview: {
    bodyColor: "#0052CC",
    headerColor: "#0052CC",
    headerTextColor: "#FFFFFF",
    accentColor: "#FFFFFF",
    showGrid: false,
    isItalic: false,
    isUppercase: false,
    isLowercase: true,
    icon: "squares",
  },
};

/**
 * Template 3: MODERN
 * Bright orange background with white bottom bar.
 * Uses Space Mono Bold for a technical, contemporary feel.
 */
const modernTemplate: DefaultTemplate = {
  id: "modern",
  name: "Modern",
  surfaceLayout: "bottom",
  panelColor: "#FF5500",
  nameColor: "#008B8B",
  labelFont: "space-mono",
  labelFontWeight: "700",
  preview: {
    bodyColor: "#FF5500",
    headerColor: "#FFFFFF",
    headerTextColor: "#008B8B",
    accentColor: "#FF5500",
    secondaryAccentColor: "#FFFFFF",
    showGrid: false,
    isItalic: false,
    isUppercase: true,
    isLowercase: false,
    icon: "star",
  },
};

/**
 * Template 4: CLASSIC
 * Black and white with orange accent, grid pattern body.
 * Uses Space Mono Bold for a clean, structured look.
 */
const classicTemplate: DefaultTemplate = {
  id: "classic",
  name: "Classic",
  surfaceLayout: "sandwich",
  panelColor: "#000000",
  nameColor: "#FFFFFF",
  labelFont: "space-mono",
  labelFontWeight: "700",
  preview: {
    bodyColor: "#FFFFFF",
    headerColor: "#000000",
    headerTextColor: "#FFFFFF",
    accentColor: "#FF5500",
    showGrid: true,
    isItalic: false,
    isUppercase: false,
    isLowercase: false,
    icon: "coffee",
  },
};

/**
 * Template 5: PLAYFUL
 * Hot pink header with beige body, italic serif typography.
 * Uses Inknut Antiqua Black for a whimsical, bold personality.
 */
const playfulTemplate: DefaultTemplate = {
  id: "playful",
  name: "Playful",
  surfaceLayout: "sandwich",
  panelColor: "#FF1493",
  nameColor: "#8B0000",
  labelFont: "inknut-antiqua",
  labelFontWeight: "900",
  preview: {
    bodyColor: "#E8DCC4",
    headerColor: "#FF1493",
    headerTextColor: "#8B0000",
    accentColor: "#FF1493",
    showGrid: true,
    isItalic: true,
    isUppercase: false,
    isLowercase: false,
    icon: "coffee",
  },
};

/**
 * All available default templates in display order.
 */
export const DEFAULT_TEMPLATES: readonly DefaultTemplate[] = [
  brutalistTemplate,
  minimalTemplate,
  modernTemplate,
  classicTemplate,
  playfulTemplate,
] as const;

/**
 * Get a template by its ID.
 */
export const getTemplateById = (id: string): DefaultTemplate | undefined => {
  return DEFAULT_TEMPLATES.find((t) => t.id === id);
};

/**
 * Extract form values from a template for applying to the form.
 */
export const getTemplateFormValues = (template: DefaultTemplate) => ({
  surfaceLayout: template.surfaceLayout,
  panelColor: template.panelColor,
  nameColor: template.nameColor,
  labelFont: template.labelFont,
  labelFontWeight: template.labelFontWeight,
});
