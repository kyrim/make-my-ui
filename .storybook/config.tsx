import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, defaultTheme } from "../src";

//automatically import all files ending in *.stories.js
const uiReq = require.context("../src", true, /.stories.tsx$/);

function loadStories() {
  uiReq.keys().forEach((filename: string) => uiReq(filename));
}

addDecorator(story => (
  <ThemeProvider theme={defaultTheme}>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>
));

configure(loadStories, module);
