"use client";

import { Field, RadioGroup } from "@ark-ui/react";
import type { RadioGroupValueChangeDetails, UseFieldContext } from "@ark-ui/react";
import classNames from "classnames";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

import styles from "./styles.module.scss";

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
}

const TemplateSelectionInput: React.FC<TemplateSelectionInputProps> = ({
  name,
  label,
  options,
  className,
}) => {
  const { control } = useFormContext();
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
                          </motion.div>
                          <RadioGroup.ItemText className={styles.visuallyHidden}>
                            {option.label}
                          </RadioGroup.ItemText>
                        </RadioGroup.Item>
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
