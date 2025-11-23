import NextImage, { type StaticImageData } from "next/image";
import { z } from "zod";
import { type ReactNode } from "react";

import beanGrindIcon from "@/public/grind/bean.png";
import coarseGrindIcon from "@/public/grind/coarse.png";
import fineGrindIcon from "@/public/grind/fine.png";
import darkRoastIcon from "@/public/roast/dark.png";
import lightRoastIcon from "@/public/roast/light.png";
import mediumRoastIcon from "@/public/roast/medium.png";

export const roastValues = ["light", "medium", "dark"] as const;
export type RoastValue = (typeof roastValues)[number];

export const grindValues = ["bean", "coarse", "fine"] as const;
export type GrindValue = (typeof grindValues)[number];

export interface OptionDefinition<TValue extends string> {
  value: TValue;
  label: string;
  icon: ReactNode;
}

const createOptionIcon = (src: StaticImageData, alt: string) => (
  <NextImage src={src} alt={alt} width={28} height={28} />
);

export const roastOptions: readonly OptionDefinition<RoastValue>[] = [
  { value: "light", label: "Light roast", icon: createOptionIcon(lightRoastIcon, "Light roast") },
  { value: "medium", label: "Medium roast", icon: createOptionIcon(mediumRoastIcon, "Medium roast") },
  { value: "dark", label: "Dark roast", icon: createOptionIcon(darkRoastIcon, "Dark roast") },
];

export const grindOptions: readonly OptionDefinition<GrindValue>[] = [
  { value: "bean", label: "Whole bean", icon: createOptionIcon(beanGrindIcon, "Whole bean") },
  { value: "coarse", label: "Coarse grind", icon: createOptionIcon(coarseGrindIcon, "Coarse grind") },
  { value: "fine", label: "Fine grind", icon: createOptionIcon(fineGrindIcon, "Fine grind") },
];

export const getOptionLabel = <TValue extends string>(
  value: TValue | undefined,
  options: readonly OptionDefinition<TValue>[]
) => options.find((option) => option.value === value)?.label;

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
  roastProfile: z.enum(roastValues, { message: "Select a roast profile" }),
  grindSetting: z.enum(grindValues, { message: "Select a grind setting" }),
  tastingNote: z
    .string()
    .max(120, "Tasting note must be 120 characters or fewer")
    .optional()
    .or(z.literal("")),
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
