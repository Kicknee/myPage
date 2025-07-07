import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/assets/styles/theme";
import { GlobalStyle } from "./src/assets/styles/GlobalStyles";

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
