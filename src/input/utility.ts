import { ThemeProps, DefaultTheme } from "styled-components";
import { Props } from "./props";

export const colorFromState = (
  props: ThemeProps<DefaultTheme> &
    Pick<Props, "validationState" | "state" | "color">
) => {
  if (props.state === "disabled" || props.state === "loading")
    return props.theme.colors.disabled;

  switch (props.validationState) {
    case "none":
      return props.color || props.theme.colors.complementary;
    case "valid":
      return props.theme.colors.valid;
    case "invalid":
      return props.theme.colors.invalid;
  }
};
