import { ThemeProps, DefaultTheme } from "styled-components";
import { Props } from "./props";

export const colorFromState = (
  props: ThemeProps<DefaultTheme> &
    Pick<Props, "validationState" | "color" | "state">
) => {
  if (props.state === "disabled") return props.theme.colors.disabled;

  switch (props.validationState) {
    case "none":
      return props.color || props.theme.colors.complementary;
    case "valid":
      return props.theme.colors.valid;
    case "invalid":
      return props.theme.colors.invalid;
  }
};
