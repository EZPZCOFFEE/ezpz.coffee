"use client";

import { Field, RadioGroup } from "@ark-ui/react";
import type { RadioGroupValueChangeDetails, UseFieldContext } from "@ark-ui/react";
import classNames from "classnames";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

import type {
  RoastValue,
  SurfaceValue,
  FontValue,
  FontSizeValue,
  FontWeightValue,
} from "@/app/[lang]/(main)/_components/formConfig";

import styles from "./styles.module.scss";
import {
  getTemplateConfig,
  getEffectiveFontFamily,
  FONT_SIZE_SCALE,
} from "./templateConfig";

interface TemplateOption {
  value: string;
  label: string;
  icon: ReactNode;
}

interface TemplateSelectionInputProps {
  name: string;
  options: readonly TemplateOption[];
  label?: string;
  className?: string;
  /** Labels for each roast value, keyed by roast value */
  roastLabels: Record<RoastValue, string>;
  /** Weight label text (default: "225g") */
  weightLabel?: string;
}

const TemplateSelectionInput: React.FC<TemplateSelectionInputProps> = ({
  name,
  label,
  options,
  className,
  roastLabels,
  weightLabel = "225g",
}) => {
  const { control } = useFormContext();

  // Watch form values for dynamic styling
  const roastProfile = useWatch({ control, name: "roastProfile" }) as RoastValue | undefined;
  const labelFont = useWatch({ control, name: "labelFont" }) as FontValue | undefined;
  const labelFontSize = useWatch({ control, name: "labelFontSize" }) as FontSizeValue | undefined;
  const labelFontWeight = useWatch({ control, name: "labelFontWeight" }) as FontWeightValue | undefined;
  const nameColor = useWatch({ control, name: "nameColor" }) as string | undefined;

  // Derive roast label from current selection
  const roastLabel = roastProfile ? roastLabels[roastProfile] : roastLabels.medium;

  if (!options.length) return null;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const selectedValue = typeof field.value === "string" ? field.value : undefined;

        return (
          <Field.Root className={classNames(styles.root, className)} invalid={fieldState.invalid}>
            {label && <Field.Label className={styles.label}>{label}</Field.Label>}
            <Field.Context>
              {({ ids, ariaDescribedby }: UseFieldContext) => (
                <RadioGroup.Root
                  id={ids.control}
                  ref={field.ref}
                  name={field.name}
                  aria-describedby={ariaDescribedby}
                  aria-invalid={fieldState.invalid || undefined}
                  value={selectedValue}
                  onBlur={field.onBlur}
                  onValueChange={(details: RadioGroupValueChangeDetails) => field.onChange(details.value)}
                  className={styles.group}
                >
                  <div className={styles.grid}>
                    {options.map((option, index) => {
                      const isActive = option.value === selectedValue;
                      const templateNumber = String(index + 1).padStart(2, "0");
                      const surfaceValue = option.value as SurfaceValue;
                      const templateConfig = getTemplateConfig(surfaceValue);

                      // Compute effective styles from form values + template defaults
                      const effectiveFontFamily = getEffectiveFontFamily(
                        labelFont,
                        templateConfig.roast.font.fontFamily
                      );
                      const fontSizeScale = labelFontSize ? FONT_SIZE_SCALE[labelFontSize] : 1;
                      const effectiveFontWeight = labelFontWeight ?? templateConfig.roast.font.fontWeight;
                      const effectiveColor = nameColor ?? templateConfig.roast.font.color;

                      // Build dynamic style for roast text
                      const roastStyle: CSSProperties = {
                        fontFamily: effectiveFontFamily,
                        fontSize: `calc(0.625rem * ${fontSizeScale})`,
                        fontWeight: effectiveFontWeight,
                        color: isActive ? "rgba(255, 255, 255, 0.9)" : effectiveColor,
                        textAlign: templateConfig.roast.position.align,
                        textTransform: templateConfig.roast.font.textTransform,
                        letterSpacing: templateConfig.roast.font.letterSpacing,
                      };

                      // Build dynamic style for weight text
                      const weightStyle: CSSProperties = {
                        fontFamily: effectiveFontFamily,
                        fontSize: `calc(0.625rem * ${fontSizeScale})`,
                        fontWeight: effectiveFontWeight,
                        color: isActive ? "rgba(255, 255, 255, 0.9)" : effectiveColor,
                        textAlign: templateConfig.weight.position.align,
                      };

                      return (
                        <RadioGroup.Item
                          key={option.value}
                          value={option.value}
                          className={styles.card}
                          data-active={isActive}
                        >
                          <RadioGroup.ItemHiddenInput />
                          <motion.div
                            className={styles.cardContent}
                            initial={false}
                            animate={{
                              backgroundColor: isActive ? "var(--color-accent)" : "var(--color-bg-secondary)",
                            }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <span className={styles.templateNumber}>{templateNumber}</span>
                            <div className={styles.templateMeta}>
                              <span className={styles.roastLabel} style={roastStyle}>
                                {roastLabel}
                              </span>
                              <span className={styles.weightLabel} style={weightStyle}>
                                {weightLabel}
                              </span>
                            </div>
                          </motion.div>
                          <RadioGroup.ItemText className={styles.visuallyHidden}>
                            {option.label}
                          </RadioGroup.ItemText>
                        </RadioGroup.Item>
                      );
                    })}
                  </div>
                  <div className={styles.optionLabels} aria-hidden="true">
                    {options.map((option) => {
                      const isActive = option.value === selectedValue;
                      return (
                        <span
                          key={`${option.value}-label`}
                          className={classNames(styles.optionLabel, { [styles.optionLabelActive]: isActive })}
                        >
                          {option.label}
                        </span>
                      );
                    })}
                  </div>
                </RadioGroup.Root>
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

export default TemplateSelectionInput;
