import Color from "color";
import { ThemeProps, DefaultTheme } from "styled-components";
import { ButtonEmphasis, ButtonShape } from "./styled-props";

export const buttonBottomColor = (color: string) =>
  Color(color)
    .darken(0.1)
    .desaturate(0.4)
    .toString();

export const hoverColor = (color: string) =>
  Color(color)
    .lighten(0.05)
    .toString();

export const activeColor = (color: string) =>
  Color(color)
    .darken(0.05)
    .toString();

export const darkerActiveColor = (color: string) =>
  Color(color)
    .darken(0.2)
    .toString();

export const contentColor = (
  props: ThemeProps<DefaultTheme> & {
    emphasis: ButtonEmphasis;
    type: ButtonShape;
  }
) => {
  if (props.type === "standard") return props.theme.colors.white;

  return emphasisColor(props);
};

export const emphasisColor = (
  props: ThemeProps<DefaultTheme> & { emphasis: ButtonEmphasis }
) => {
  switch (props.emphasis) {
    case "primary":
      return props.theme.colors.primary;
    case "secondary":
      return props.theme.colors.secondary;
    case "valid":
      return props.theme.colors.valid;
    case "invalid":
      return props.theme.colors.invalid;
  }
};
