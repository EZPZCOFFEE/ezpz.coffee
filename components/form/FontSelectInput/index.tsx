"use client";

import { Select as ArkSelect, createListCollection, type SelectValueChangeDetails } from "@ark-ui/react";
import { CheckIcon } from "@phosphor-icons/react";
import { useMemo } from "react";
import type { FieldValues, Path } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";

import { Select } from "@/components/blocks/Select";
import styles from "@/components/blocks/Select/styles.module.scss";

export interface FontOption {
  value: string;
  label: string;
  fontFamily: string;
  category: "serif" | "sans-serif" | "display" | "monospace";
}

interface FontSelectInputProps<TFieldValues extends FieldValues = FieldValues> {
  name: Path<TFieldValues>;
  label?: string;
  options: readonly FontOption[];
  className?: string;
  disabled?: boolean;
}

const FontSelectInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  options,
  disabled = false,
}: FontSelectInputProps<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>();

  const collection = useMemo(
    () =>
      createListCollection({
        items: options.map((opt) => ({
          label: opt.label,
          value: opt.value,
          fontFamily: opt.fontFamily,
          category: opt.category,
        })),
        itemToString: (item) => item.label,
        itemToValue: (item) => item.value,
      }),
    [options]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const selectedValue = typeof field.value === "string" ? field.value : undefined;
        const selectedOption = options.find((opt) => opt.value === selectedValue);

        const handleValueChange = (details: SelectValueChangeDetails<FontOption>) => {
          const newValue = details.value?.[0];
          if (newValue) {
            field.onChange(newValue);
          }
        };

        return (
          <Select.Root
            collection={collection}
            value={selectedValue ? [selectedValue] : []}
            onValueChange={handleValueChange}
            disabled={disabled}
            positioning={{ sameWidth: true, placement: "bottom-start" }}
            fullWidth
          >
            <Select.HiddenSelect name={name} />
            <Select.Control hideClearButton invalid={fieldState.invalid}>
              <span
                className={styles["value-text"]}
                style={{ fontFamily: selectedOption?.fontFamily ?? "inherit" }}
              >
                {selectedOption?.label ?? "Select font"}
              </span>
            </Select.Control>

            <Select.Menu portalled={false}>
              <ArkSelect.ItemGroup className={styles["item-group"]}>
                {options.map((option) => (
                  <ArkSelect.Item key={option.value} item={option} className={styles.item}>
                    <span className={styles["item-label"]} style={{ fontFamily: option.fontFamily }}>
                      {option.label}
                    </span>
                    <ArkSelect.ItemIndicator className={styles["item-indicator"]}>
                      <CheckIcon weight="bold" />
                    </ArkSelect.ItemIndicator>
                  </ArkSelect.Item>
                ))}
              </ArkSelect.ItemGroup>
            </Select.Menu>
          </Select.Root>
        );
      }}
    />
  );
};

export default FontSelectInput;
