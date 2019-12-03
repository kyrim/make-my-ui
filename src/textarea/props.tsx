import React from "react";

export type TextAreaValidationState = "none" | "valid" | "invalid";

export type TextAreaState = "normal" | "disabled" | "loading";

export interface Props {
  className?: string;
  color?: string;
  label?: string;
  state: TextAreaState;
  validationState: TextAreaValidationState;
  message?: string;

  textAreaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}
