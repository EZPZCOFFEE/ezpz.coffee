"use client";

import { Field, RadioGroup } from "@ark-ui/react";
import type { RadioGroupValueChangeDetails, UseFieldContext } from "@ark-ui/react";
import classNames from "classnames";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

import styles from "./styles.module.scss";

interface Option {
  value: string;
  label: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
}

interface OptionsInputProps {
  name: string;
  options: readonly Option[];
  label?: string;
  helperText?: string;
  className?: string;
}

const OptionsInput: React.FC<OptionsInputProps> = ({ name, label, helperText, options, className }) => {
  const { control } = useFormContext();
  const optionCount = options.length;

  if (!optionCount) return null;

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
                    <div className={styles.track}>
                      {options.map((option) => {
                        const isActive = option.value === selectedValue;
                        const iconNode = isActive && option.activeIcon ? option.activeIcon : option.icon;
                        return (
                          <RadioGroup.Item
                            key={option.value}
                            value={option.value}
                            className={styles.option}
                            data-active={isActive}
                          >
                            <RadioGroup.ItemHiddenInput />
                            {isActive && (
                              <motion.span
                                layoutId={`options-input-indicator-${name}`}
                                aria-hidden="true"
                                className={styles.indicator}
                                transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.7 }}
                              />
                            )}
                            <span className={styles.iconWrapper} aria-hidden="true">
                              {iconNode}
                            </span>
                            <RadioGroup.ItemText className={styles.optionLabel}>
                              {option.label}
                            </RadioGroup.ItemText>
                          </RadioGroup.Item>
                        );
                      })}
                    </div>
                  </RadioGroup.Root>
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

export default OptionsInput;
