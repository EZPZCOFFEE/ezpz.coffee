import { type ReactNode, type SVGProps } from "react";
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

export const roastOptions: readonly OptionDefinition<RoastValue>[] = [
  {
    value: "light",
    label: "Light roast",
    icon: createOptionIcon(LightRoastIcon),
  },
  {
    value: "medium",
    label: "Medium roast",
    icon: createOptionIcon(MediumRoastIcon),
  },
  {
    value: "dark",
    label: "Dark roast",
    icon: createOptionIcon(DarkRoastIcon),
  },
];

export const grindOptions: readonly OptionDefinition<GrindValue>[] = [
  {
    value: "fine",
    label: "Fine grind",
    icon: createOptionIcon(FineGrindIcon),
  },
  {
    value: "coarse",
    label: "Coarse grind",
    icon: createOptionIcon(CoarseGrindIcon),
  },
  {
    value: "bean",
    label: "Whole bean",
    icon: createOptionIcon(BeanGrindIcon),
  },
];

export const surfaceValues = ["panels", "full", "bottom"] as const;
export type SurfaceValue = (typeof surfaceValues)[number];
export const defaultSurfaceValue: SurfaceValue = "bottom";

export const surfaceOptions: readonly OptionDefinition<SurfaceValue>[] = [
  {
    value: "panels",
    label: "Panels",
    icon: createOptionIcon(PanelsSurfaceIcon, 30),
  },
  {
    value: "full",
    label: "Full",
    icon: createOptionIcon(FullSurfaceIcon, 30),
  },
  {
    value: "bottom",
    label: "Bottom",
    icon: createOptionIcon(BottomSurfaceIcon, 30),
  },
] as const;

export const surfacePreviewDetails: Record<SurfaceValue, { description: string }> = {
  panels: {
    description: "Twin panels keep typography crisp and separated from the artwork.",
  },
  full: {
    description: "Edge-to-edge coverage—best for bold photography or seamless patterns.",
  },
  bottom: {
    description: "Bottom strip treatment works best for high-detail imagery or signatures.",
  },
};

export const getOptionLabel = <TValue extends string>(
  value: TValue | undefined,
  options: readonly OptionDefinition<TValue>[]
) => options.find((option) => option.value === value)?.label;

export const hexColorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
export const defaultNameColor = "#111827";

export const sanitizeHexColor = (color: string | undefined): string => {
  if (!color) return defaultNameColor;
  const trimmed = color.trim();
  return hexColorRegex.test(trimmed) ? trimmed : defaultNameColor;
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
