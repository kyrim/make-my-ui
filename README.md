<p align="center">
<img src="https://raw.githubusercontent.com/kyrim/make-my-ui/master/logo-96.png" alt="" width=96 height=96>
<h1 align="center">MakeMyUI</h1>
<p align="center">
  A React UI Library built from scratch using Typescript and Styled Components.
</p>

### ⚠️ Warning

This library is currently a work in progress and not ready for production. Please use at your own risk!

## Demo / Components

https://kyrim.dev/make-my-ui

## Installation

Install from npm / yarn and include it in your React build process (using [Webpack](http://webpack.github.io/) etc). You will need to also install styled-components.

```bash
npm install --save make-my-ui styled-components
```

or:

```bash
yarn add make-my-ui styled-components
```

## Usage

To use MakeMyUI, you will need to use Styled Components theme provider at the root of your application. You can use either the defaultTheme, or make use your own.

```typescript
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, Button } from "make-my-ui";

// You can also import your own theme, extending the DefaultTheme
//import { myTheme } from "../my-theme";

class App {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <>
          <GlobalStyle />
          // Use your components from MakeMyUI inside ThemeProvider
          <Button />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
```

## Customise the Theme

To create your own theme, use the defaultTheme as a template located [here](https://github.com/kyrim/make-my-ui/blob/master/src/styles/default-theme.ts), create a new file, customise the values and provide this to the Styled Components `ThemeProvider`.

For example:

```typescript
import { myTheme } from "../my-theme";
...

<ThemeProvider theme={myTheme}>
  <>
    <GlobalStyle/>
    // Use your components from MakeMyUI inside ThemeProvider
    <Button />
  </>
</ThemeProvider>
```

### External packages

MakeMyUI uses the following packages:

- [react-dropzone](https://github.com/react-dropzone/react-dropzone) (Upload component)
- [autosize](https://github.com/jackmoore/autosize) (Textarea Component)
- [downshift](https://github.com/downshift-js/downshift) (Autocomplete Component)
