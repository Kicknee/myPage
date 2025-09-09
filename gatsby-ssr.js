import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/assets/styles/theme";
import { GlobalStyle } from "./src/assets/styles/GlobalStyles";
import { TranslationProvider } from "./src/context/TranslationContext";

export const wrapPageElement = ({ element }) => (
  <TranslationProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  </TranslationProvider>
);
