"use client";

import { Field } from "@ark-ui/react";
import classNames from "classnames";
import { useMemo } from "react";
import type { FieldValues, Path, PathValue } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";

import { HorizontalScroll } from "@/components/shared/HorizontalScroll";

import styles from "./styles.module.scss";

// Color palette from brand profile
const COLOR_GROUPS = {
  neutral: ["#FFFFFF", "#000000", "#E9E9E9"], // White, Black, Gray
  lightAccent: ["#F6EBE4", "#CDCCA9", "#EFD2CE", "#FFFFE8", "#E6EDF1"], // Tile, Moss, Pink, Banana, Sky
  vibrantAccent: ["#FF6000", "#BED560", "#E65E9A", "#F1D64A", "#9FCFF8"], // Orange, Green, Pink, Yellow, Blue
  deepAccent: ["#7D1800", "#197755", "#AF2051", "#F1814A", "#194491"], // Sienna, Forest, Fuscia, Canary, Agua
} as const;

const BRAND_PALETTE = [
  ...COLOR_GROUPS.neutral,
  ...COLOR_GROUPS.lightAccent,
  ...COLOR_GROUPS.vibrantAccent,
  ...COLOR_GROUPS.deepAccent,
] as const;

const normalizeSwatches = (swatches: readonly string[]): string[] => {
  const seen = new Set<string>();

  swatches.forEach((swatch) => {
    if (typeof swatch !== "string") return;
    const trimmed = swatch.trim();
    if (!trimmed) return;
    if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(trimmed)) return;
    seen.add(trimmed.toUpperCase());
  });

  if (seen.size === 0) {
    BRAND_PALETTE.forEach((defaultColor) => seen.add(defaultColor));
  }

  return Array.from(seen);
};

/**
 * Determines if a hex color is light or dark based on relative luminance
 * Returns true if the color is light, false if dark
 */
const isLightColor = (hex: string): boolean => {
  // Remove # if present
  const color = hex.replace("#", "");

  // Handle 3-digit hex
  const r = color.length === 3 ? parseInt(color[0] + color[0], 16) : parseInt(color.substring(0, 2), 16);
  const g = color.length === 3 ? parseInt(color[1] + color[1], 16) : parseInt(color.substring(2, 4), 16);
  const b = color.length === 3 ? parseInt(color[2] + color[2], 16) : parseInt(color.substring(4, 6), 16);

  // Calculate relative luminance (perceived brightness)
  // Using the formula from WCAG: https://www.w3.org/WAI/GL/wiki/Relative_luminance
  const [rs, gs, bs] = [r, g, b].map((val) => {
    const normalized = val / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });

  const luminance = 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;

  // Threshold of 0.5 - colors above are considered light
  return luminance > 0.5;
};

interface ColorPaletteInputProps<TFieldValues extends FieldValues = FieldValues> {
  name: Path<TFieldValues>;
  label?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  colors?: readonly string[];
  defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>;
}

const ColorPaletteInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  className,
  disabled = false,
  required = false,
  colors = BRAND_PALETTE,
  defaultValue,
}: ColorPaletteInputProps<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>();
  const normalizedColors = useMemo(() => normalizeSwatches(colors), [colors]);

  // Group colors by category if using default palette
  const useDefaultPalette = colors === BRAND_PALETTE;
  const colorGroups = useMemo(() => {
    if (!useDefaultPalette) {
      return [{ colors: normalizedColors }];
    }

    const neutralSet = new Set(COLOR_GROUPS.neutral.map((c) => c.toUpperCase()));
    const lightAccentSet = new Set(COLOR_GROUPS.lightAccent.map((c) => c.toUpperCase()));
    const vibrantAccentSet = new Set(COLOR_GROUPS.vibrantAccent.map((c) => c.toUpperCase()));
    const deepAccentSet = new Set(COLOR_GROUPS.deepAccent.map((c) => c.toUpperCase()));

    const groups: { colors: string[] }[] = [];
    let currentGroup: string[] = [];
    let currentGroupType: "neutral" | "lightAccent" | "vibrantAccent" | "deepAccent" | null = null;

    normalizedColors.forEach((color) => {
      const upperColor = color.toUpperCase();
      let groupType: "neutral" | "lightAccent" | "vibrantAccent" | "deepAccent" | null = null;

      if (neutralSet.has(upperColor)) {
        groupType = "neutral";
      } else if (lightAccentSet.has(upperColor)) {
        groupType = "lightAccent";
      } else if (vibrantAccentSet.has(upperColor)) {
        groupType = "vibrantAccent";
      } else if (deepAccentSet.has(upperColor)) {
        groupType = "deepAccent";
      }

      if (groupType !== currentGroupType && currentGroup.length > 0) {
        groups.push({ colors: currentGroup });
        currentGroup = [];
      }

      currentGroup.push(color);
      currentGroupType = groupType;
    });

    if (currentGroup.length > 0) {
      groups.push({ colors: currentGroup });
    }

    return groups;
  }, [normalizedColors, useDefaultPalette]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        const { onChange, onBlur, value } = field;
        const rawValue = value as unknown;
        const selectedColor =
          typeof rawValue === "string" && rawValue.trim().length > 0
            ? rawValue.trim().toUpperCase()
            : undefined;

        const handleColorSelect = (color: string) => {
          if (disabled) return;
          onChange(color);
          onBlur();
        };

        return (
          <Field.Root
            className={classNames(styles.root, className)}
            invalid={fieldState.invalid}
            required={required}
          >
            {label && <Field.Label className={styles.label}>{label}</Field.Label>}
            <Field.Context>
              {({ ids, ariaDescribedby }) => (
                <HorizontalScroll>
                  <div
                    id={ids.control}
                    aria-describedby={ariaDescribedby}
                    aria-invalid={fieldState.invalid || undefined}
                    className={styles.palette}
                    role="radiogroup"
                    aria-label={label ?? "Color palette"}
                  >
                    {colorGroups.map((group, groupIndex) => (
                      <div key={groupIndex} className={styles.colorGroup}>
                        {groupIndex > 0 && <div className={styles.divider} aria-hidden="true" />}
                        {group.colors.map((color) => {
                          const isSelected = selectedColor === color.toUpperCase();
                          const isLight = isLightColor(color);
                          return (
                            <button
                              key={color}
                              type="button"
                              className={classNames(styles.swatchButton, {
                                [styles["swatchButton--selected"]]: isSelected,
                                [styles["swatchButton--disabled"]]: disabled,
                              })}
                              onClick={() => handleColorSelect(color)}
                              disabled={disabled}
                              aria-label={`Select color ${color}`}
                              aria-pressed={isSelected}
                              onBlur={onBlur}
                            >
                              <span
                                className={styles.swatch}
                                style={{ backgroundColor: color }}
                                aria-hidden="true"
                              />
                              {isSelected && (
                                <span
                                  className={classNames(styles.indicator, {
                                    [styles["indicator--light"]]: isLight,
                                    [styles["indicator--dark"]]: !isLight,
                                  })}
                                  aria-hidden="true"
                                >
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10 3L4.5 8.5L2 6"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </HorizontalScroll>
              )}
            </Field.Context>

            {fieldState.error?.message && (
              <Field.ErrorText className={styles.error}>{fieldState.error.message}</Field.ErrorText>
            )}
          </Field.Root>
        );
      }}
    />
  );
};

export default ColorPaletteInput;
