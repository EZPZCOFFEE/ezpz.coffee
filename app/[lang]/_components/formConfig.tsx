import { useTranslations } from "next-intl";
import { type ReactNode, type SVGProps, useMemo } from "react";
import { z } from "zod";

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
