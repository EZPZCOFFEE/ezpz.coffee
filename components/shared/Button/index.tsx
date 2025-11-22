"use client";

import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", fullWidth = false, className, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={classNames(
        styles.button,
        styles[`button--${variant}`],
        { [styles["button--full-width"]]: fullWidth },
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export default Button;
