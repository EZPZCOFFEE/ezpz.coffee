"use client";

import { Field, RadioGroup } from "@ark-ui/react";
import type { RadioGroupValueChangeDetails, UseFieldContext } from "@ark-ui/react";
import classNames from "classnames";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
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
  className?: string;
}

const OptionsInput: React.FC<OptionsInputProps> = ({ name, label, options, className }) => {
  const { control } = useFormContext();
  const optionCount = options.length;

  if (!optionCount) return null;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const selectedValue = typeof field.value === "string" ? field.value : undefined;
        const activeIndex = options.findIndex((option) => option.value === selectedValue);
        const indicatorIndex = activeIndex >= 0 ? activeIndex : 0;
        const indicatorX = `${indicatorIndex * 100}%`;
        const trackStyle: CSSProperties = {
          "--option-count": optionCount,
        } as CSSProperties;
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
                  <div className={styles.track} style={trackStyle}>
                    {optionCount > 0 && (
                      <motion.span
                        layout
                        layoutId={`options-input-indicator-${name}`}
                        aria-hidden="true"
                        className={styles.indicator}
                        initial={false}
                        animate={{ x: indicatorX }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                          mass: 0.7,
                        }}
                      />
                    )}
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
                          <span className={styles.iconWrapper} aria-hidden="true">
                            {iconNode}
                          </span>
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

export default OptionsInput;
