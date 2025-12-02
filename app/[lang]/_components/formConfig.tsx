import { useTranslations } from "next-intl";
import { type ReactNode, type SVGProps, useMemo } from "react";
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

const createOptionIcon = (Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element, size = 28) => (
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

export const surfaceValues = ["sandwich", "full", "bottom"] as const;
export type SurfaceValue = (typeof surfaceValues)[number];
export const defaultSurfaceValue: SurfaceValue = "bottom";

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
  roastProfile: z.enum(roastValues, { message: "Select a roast profile" }),
  grindSetting: z.enum(grindValues, { message: "Select a grind setting" }),
  surfaceLayout: z.enum(surfaceValues, { message: "Choose a bag surface" }),
  panelColor: z.string().regex(hexColorRegex, { message: "Enter a valid panel color (for example #f3ebe1)" }),
  quantity: z
    .number()
    .int({ message: "Quantity must be a whole number" })
    .min(1, "Select at least 1 bag")
    .max(10, "Limit 10 bags per order"),
  artworkFile: z
    .array(fileSchema)
    .min(1, "Upload your bag artwork")
    .max(1, "Only one artwork file is allowed"),
});

export type CustomizationFormValues = z.infer<typeof customizationFormSchema>;

export const formatPreviewValue = (value: string | undefined, placeholder: string) =>
  value && value.trim().length > 0 ? value : placeholder;
