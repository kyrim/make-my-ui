import React from "react";

export type CheckboxValidationState = "none" | "valid" | "invalid";

export type CheckboxState = "normal" | "disabled" | "loading";

export interface Props {
  value?: boolean;
  className?: string;
  color?: string;
  label?: string;
  state?: CheckboxState;
  validationState?: CheckboxValidationState;
  message?: string;

  checkboxProps?: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}
