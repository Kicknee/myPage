import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { theme } from "../assets/styles/theme";

export function MainTemplate({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {children}
      </ThemeProvider>
    </>
  );
}
