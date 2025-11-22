"use client";

import { Field } from "@ark-ui/react";
import classNames from "classnames";
import React, { useId } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  get,
  useFormContext,
} from "react-hook-form";

import styles from "./styles.module.scss";

export type TextInputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: Path<TFieldValues>;
  label: string;
  helperText?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  registrationOptions?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name">;

const TextInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  helperText,
  wrapperClassName,
  inputClassName,
  registrationOptions,
  type = "text",
  ...inputProps
}: TextInputProps<TFieldValues>) => {
  const { register, formState } = useFormContext<TFieldValues>();
  const fieldId = useId();
  const helperId = helperText ? `${fieldId}-helper` : undefined;
  const error = get(formState.errors, name);
  const errorMessage = typeof error?.message === "string" ? error.message : undefined;

  const { ref, ...registeredField } = register(name, registrationOptions);

  return (
    <Field.Root
      className={classNames(styles.root, wrapperClassName)}
      invalid={Boolean(errorMessage)}
    >
      <Field.Label className={styles.label} htmlFor={fieldId}>
        {label}
      </Field.Label>
      <Field.Control className={styles.control}>
        <Field.Input
          {...registeredField}
          ref={ref}
          id={fieldId}
          aria-describedby={helperId}
          aria-invalid={Boolean(errorMessage)}
          className={classNames(styles.input, inputClassName)}
          type={type}
          {...inputProps}
        />
      </Field.Control>
      {!errorMessage && helperText && (
        <Field.HelperText id={helperId} className={styles.helper}>
          {helperText}
        </Field.HelperText>
      )}
      {errorMessage && (
        <Field.ErrorText className={styles.error}>{errorMessage}</Field.ErrorText>
      )}
    </Field.Root>
  );
};

export default TextInput;
