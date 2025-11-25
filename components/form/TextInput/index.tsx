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
  return (
    <Field.Root className={styles.fieldRoot} invalid={isInvalid}>
      {label && (
        <Field.Label asChild>
          <label className={styles.srOnly}>{optionalLabel ? `${label} (${optionalLabel})` : label}</label>
        </Field.Label>
      )}

      <div className={styles.inputWrapper} data-invalid={isInvalid ? "true" : "false"}>
        <Field.Input asChild>
          <input
            {...registered}
            {...inputProps}
            id={inputProps.id ?? registered.name}
            className={styles.inputElement}
          />
        </Field.Input>
      </div>

      {errorMessage && (
        <Field.ErrorText asChild>
          <p className={styles.errorText}>{errorMessage}</p>
        </Field.ErrorText>
      )}
    </Field.Root>
  );
};

export default TextInput;
