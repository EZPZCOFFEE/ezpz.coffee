"use client";

import { createListCollection, type SelectValueChangeDetails } from "@ark-ui/react";
import { useMemo } from "react";
import type { FieldValues, Path } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";

import { Select } from "@/components/blocks/Select";
import styles from "@/components/blocks/Select/styles.module.scss";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps<TFieldValues extends FieldValues = FieldValues> {
  name: Path<TFieldValues>;
  label?: string;
  options: readonly SelectOption[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const SelectInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  options,
  placeholder = "Select...",
  disabled = false,
}: SelectInputProps<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>();

  const collection = useMemo(
    () =>
      createListCollection({
        items: options.map((opt) => ({
          label: opt.label,
          value: opt.value,
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

        const handleValueChange = (details: SelectValueChangeDetails<SelectOption>) => {
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
              <span className={styles["value-text"]}>
                {selectedOption?.label ?? placeholder}
              </span>
            </Select.Control>

            <Select.Menu portalled={false}>
              <Select.Items items={options as SelectOption[]} />
            </Select.Menu>
          </Select.Root>
        );
      }}
    />
  );
};

export default SelectInput;

