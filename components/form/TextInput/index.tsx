"use client";

import { Field } from "@ark-ui/react";
import type { FieldError, FieldValues, Path } from "react-hook-form";
import { useFormContext } from "react-hook-form";

import styles from "./styles.module.scss";

interface BaseTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  helperText?: string;
  optionalLabel?: string;
}

type TextInputProps<TFieldValues extends FieldValues = FieldValues> = BaseTextInputProps & {
  name: Path<TFieldValues>;
};

const getErrorMessage = (error: FieldError | undefined): string | undefined => {
  if (!error) return undefined;

  if (typeof error.message === "string" && error.message.trim().length > 0) {
    return error.message;
  }

  return "Invalid value";
};

const TextInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  helperText,
  optionalLabel,
  ...inputProps
}: TextInputProps<TFieldValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TFieldValues>();

  const fieldError = errors[name] as FieldError | undefined;
  const errorMessage = getErrorMessage(fieldError);
  const isInvalid = Boolean(errorMessage);

  const registered = register(name);
  const showLabelRow = Boolean(label?.trim()) || Boolean(optionalLabel?.trim());

  return (
    <Field.Root className={styles.fieldRoot} invalid={isInvalid}>
      {showLabelRow && (
        <div className={styles.labelRow}>
          {label && (
            <Field.Label asChild>
              <label className={styles.label}>{label}</label>
            </Field.Label>
          )}
          {optionalLabel && <span className={styles.optionalLabel}>{optionalLabel}</span>}
        </div>
      )}

      <Field.Root className={styles.inputWrapper} data-invalid={isInvalid ? "true" : "false"}>
        <Field.Input asChild>
          <input
            {...registered}
            {...inputProps}
            id={inputProps.id ?? registered.name}
            className={styles.inputElement}
          />
        </Field.Input>
      </Field.Root>

      {errorMessage ? (
        <Field.ErrorText asChild>
          <p className={styles.errorText}>{errorMessage}</p>
        </Field.ErrorText>
      ) : (
        helperText && (
          <Field.HelperText asChild>
            <p className={styles.helperText}>{helperText}</p>
          </Field.HelperText>
        )
      )}
    </Field.Root>
  );
};

export default TextInput;
