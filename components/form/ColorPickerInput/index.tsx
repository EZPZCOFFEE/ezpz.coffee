"use client";

import { ColorPicker, Field, type ColorPickerValueChangeDetails } from "@ark-ui/react";
import { EyedropperIcon } from "@phosphor-icons/react";
import classNames from "classnames";
import { useMemo } from "react";
import type { FieldValues, Path, PathValue } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";

import styles from "./styles.module.scss";

const POPULAR_SWATCHES = [
  "#111827", // slate-900
  "#6B7280", // gray-500
  "#F97316", // orange-500
  "#EF4444", // red-500
  "#FACC15", // yellow-400
  "#34D399", // green-400
  "#0EA5E9", // sky-500
  "#A855F7", // purple-500
  "#F5F5F5", // gray-100
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
    POPULAR_SWATCHES.forEach((defaultColor) => seen.add(defaultColor));
  }

  return Array.from(seen);
};

interface ColorPickerInputProps<TFieldValues extends FieldValues = FieldValues> {
  name: Path<TFieldValues>;
  label?: string;
  helperText?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  swatches?: readonly string[];
  defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>;
}

const DEFAULT_PREVIEW_COLOR = "#6B7280";

const ColorPickerInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  helperText,
  className,
  disabled = false,
  required = false,
  swatches = POPULAR_SWATCHES,
  defaultValue,
}: ColorPickerInputProps<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>();
  const normalizedSwatches = useMemo(() => normalizeSwatches(swatches), [swatches]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        const { onChange, onBlur } = field;
        const rawValue = field.value as unknown;
        const normalizedValue = typeof rawValue === "string" && rawValue.trim().length ? rawValue : undefined;
        const previewColor = normalizedValue ?? DEFAULT_PREVIEW_COLOR;

        const handleValueChange = ({ value }: ColorPickerValueChangeDetails) => {
          const hexValue = value?.toString("hex");
          onChange(hexValue ?? normalizedValue ?? DEFAULT_PREVIEW_COLOR);
        };

        return (
          <Field.Root
            className={classNames(styles.root, className)}
            invalid={fieldState.invalid}
            defaultValue={defaultValue}
            required={required}
          >
            {label && <Field.Label className={styles.label}>{label}</Field.Label>}
            <Field.Context>
              {({ ids, ariaDescribedby }) => (
                <ColorPicker.Root
                  // value={colorValue}
                  onValueChange={handleValueChange}
                  disabled={disabled}
                  closeOnSelect
                >
                  <ColorPicker.Control className={styles.control}>
                    <ColorPicker.Trigger
                      id={ids.control}
                      aria-describedby={ariaDescribedby}
                      aria-invalid={fieldState.invalid || undefined}
                      className={classNames(styles.trigger, {
                        [styles["trigger--invalid"]]: fieldState.invalid,
                        [styles["trigger--disabled"]]: disabled,
                      })}
                      onBlur={onBlur}
                      disabled={disabled}
                    >
                      <span className={styles.sample} style={{ color: previewColor }}>
                        Abc
                      </span>
                      <span className={styles.preview} aria-hidden="true">
                        <ColorPicker.TransparencyGrid className={styles.previewGrid} />
                        <ColorPicker.ValueSwatch className={styles.previewSwatch} />
                        <EyedropperIcon className={styles.dropperIcon} weight="regular" />
                      </span>
                    </ColorPicker.Trigger>
                  </ColorPicker.Control>
                  <ColorPicker.Positioner className={styles.positioner}>
                    <ColorPicker.Content className={styles.content}>
                      <div className={styles.areaSection}>
                        <ColorPicker.Area className={styles.area}>
                          <ColorPicker.AreaBackground className={styles.areaBackground} />
                          <ColorPicker.TransparencyGrid className={styles.areaGrid} />
                          <ColorPicker.AreaThumb className={styles.areaThumb} />
                        </ColorPicker.Area>

                        <ColorPicker.ChannelSlider channel="hue" className={styles.slider}>
                          <ColorPicker.ChannelSliderTrack className={styles.sliderTrack} />
                          <ColorPicker.ChannelSliderThumb className={styles.sliderThumb} />
                        </ColorPicker.ChannelSlider>
                      </div>

                      <div className={styles.inputsRow}>
                        <ColorPicker.ChannelInput
                          channel="hex"
                          aria-label="Hex value"
                          className={styles.hexInput}
                          onBlur={onBlur}
                        />
                        <ColorPicker.EyeDropperTrigger
                          className={styles.eyeDropperButton}
                          disabled={disabled}
                        >
                          <EyedropperIcon weight="regular" />
                        </ColorPicker.EyeDropperTrigger>
                      </div>

                      {normalizedSwatches.length > 0 && (
                        <ColorPicker.SwatchGroup className={styles.swatchGroup}>
                          {normalizedSwatches.map((color) => (
                            <ColorPicker.SwatchTrigger
                              key={color}
                              value={color}
                              className={styles.swatchTrigger}
                              aria-label={`Use ${color}`}
                            >
                              <ColorPicker.Swatch value={color} className={styles.swatch}>
                                <ColorPicker.SwatchIndicator className={styles.swatchIndicator} />
                              </ColorPicker.Swatch>
                            </ColorPicker.SwatchTrigger>
                          ))}
                        </ColorPicker.SwatchGroup>
                      )}
                    </ColorPicker.Content>
                  </ColorPicker.Positioner>
                </ColorPicker.Root>
              )}
            </Field.Context>

            {helperText && !fieldState.error && (
              <Field.HelperText className={styles.helper}>{helperText}</Field.HelperText>
            )}
            {fieldState.error?.message && (
              <Field.ErrorText className={styles.error}>{fieldState.error.message}</Field.ErrorText>
            )}
          </Field.Root>
        );
      }}
    />
  );
};

export default ColorPickerInput;
