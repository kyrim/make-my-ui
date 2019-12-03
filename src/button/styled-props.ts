export type ButtonEmphasis = "primary" | "secondary" | "valid" | "invalid";
export type ButtonState = "none" | "disabled" | "loading";
export type ButtonShape = "standard" | "basic";

export interface StyledProps {
  className?: string;
  emphasis: ButtonEmphasis;
  state: ButtonState;
  shape: ButtonShape;
  fluid: boolean;
}
