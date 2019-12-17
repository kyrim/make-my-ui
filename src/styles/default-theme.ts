import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
  containerPadding: "5rem",

  colors: {
    primary: "#8B67F0",
    secondary: "#221C69",
    complementary: "#64A5f5",
    darkComplementary: "#505074",
    white: "#FFFFFF",
    background: "#FDFCFC",
    valid: "#27AE60",
    invalid: "#EB5757",
    disabled: "#ACACAC"
  },

  zIndex: {
    dropdown: 100,
    navbar: 800
  },

  font: {
    baseFontFamily: `'Open Sans', sans-serif`,
    baseFontSize: "20px",
    controlFontSize: "0.875rem",

    fontWeightRegular: "400",
    fontWeightBold: "600",

    lineHeight: "1.5",

    typography: {
      header1Size: "1.75rem",
      header2Size: "1.5rem",
      header3Size: "1.25rem"
    }
  }
};

export { defaultTheme };
