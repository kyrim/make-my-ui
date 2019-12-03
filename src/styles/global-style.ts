import { createGlobalStyle } from "styled-components";

// These are global styles. Include at the top!
export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${props => props.theme.font.baseFontSize};
  }

  #__next {
    min-height: 100vh;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: ${props => props.theme.colors.background};
    color: black;
    font-family: ${props => props.theme.font.baseFontFamily};
    font-weight: ${props => props.theme.font.fontWeightRegular};
    line-height: ${props => props.theme.font.lineHeight};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .react-css-collapse-transition {
    transition: height 300ms cubic-bezier(.54, 0, .29, 1);
  }
`;
