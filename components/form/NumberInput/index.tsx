"use client";

import { Field, NumberInput as ArkNumberInput } from "@ark-ui/react";
import classNames from "classnames";
import type { FieldValues, Path, PathValue } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";

import styles from "./styles.module.scss";

interface NumberInputProps<TFieldValues extends FieldValues = FieldValues> {
  name: Path<TFieldValues>;
  label?: string;
  helperText?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

interface ValueChangeDetails {
  value: string;
  valueAsNumber: number;
}

const NumberInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  helperText,
  min,
  max,
  step = 1,
  defaultValue,
  className,
  disabled,
  required,
}: NumberInputProps<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>();
  const {
    field: { value, onChange, onBlur, ref, name: fieldName },
    fieldState,
  } = useController<TFieldValues>({
    name,
    control,
    defaultValue,
  });

  const errorMessage = fieldState.error?.message;
  const helperTextId = helperText && !errorMessage ? `${name}-helper` : undefined;
  const errorId = errorMessage ? `${name}-error` : undefined;
  const displayValue = value === undefined || value === null || Number.isNaN(value) ? "" : String(value);

  const handleValueChange = ({ value: nextValue, valueAsNumber }: ValueChangeDetails) => {
    if (nextValue === "") {
      onChange(undefined);
      return;
    }

    if (Number.isNaN(valueAsNumber)) {
      return;
    }

    onChange(valueAsNumber);
  };

  return (
    <Field.Root
      className={classNames(styles.root, className)}
      invalid={Boolean(errorMessage)}
      required={required}
    >
      {label && <Field.Label className={styles.label}>{label}</Field.Label>}

      <ArkNumberInput.Root
        className={styles["number-input"]}
        min={min}
        max={max}
        step={step}
        value={displayValue}
        onValueChange={handleValueChange}
        disabled={disabled}
      >
        <ArkNumberInput.Control
          className={classNames(styles.control, {
            [styles["control--invalid"]]: errorMessage,
            [styles["control--disabled"]]: disabled,
          })}
        >
          <ArkNumberInput.DecrementTrigger className={styles.trigger} aria-label="Decrease value">
            -
          </ArkNumberInput.DecrementTrigger>
          <ArkNumberInput.Input
            className={styles.input}
            ref={ref}
            name={fieldName}
            onBlur={onBlur}
            inputMode="numeric"
            aria-invalid={Boolean(errorMessage)}
            aria-describedby={errorId ?? helperTextId}
            disabled={disabled}
          />
          <ArkNumberInput.IncrementTrigger className={styles.trigger} aria-label="Increase value">
            +
          </ArkNumberInput.IncrementTrigger>
        </ArkNumberInput.Control>
      </ArkNumberInput.Root>

      {errorMessage && (
        <Field.ErrorText id={errorId} className={styles.error}>
          {errorMessage}
        </Field.ErrorText>
      )}
    </Field.Root>
  );
};

export default NumberInput;
