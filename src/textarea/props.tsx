import React from "react";

import { InputValidationState } from "../input/props";

export type TextAreaState = "normal" | "disabled" | "loading";

export interface Props {
  className?: string;
  color?: string;
  label?: string;
  state: TextAreaState;
  validationState: InputValidationState;
  message?: string;

  textAreaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}
