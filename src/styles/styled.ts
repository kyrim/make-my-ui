import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;
    containerPadding: string;

    colors: {
      primary: string;
      secondary: string;
      complementary: string;
      darkComplementary: string;
      white: string;
      background: string;
      valid: string;
      invalid: string;
      disabled: string;
    };

    zIndex: {
      dropdown: number;
      navbar: number;
    };

    font: {
      baseFontFamily: string;
      baseFontSize: string;
      controlFontSize: string;

      fontWeightRegular: string;
      fontWeightBold: string;

      lineHeight: string;

      typography: {
        header1Size: string;
        header2Size: string;
        header3Size: string;
      };
    };
  }
}
