import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/assets/styles/theme";
import { GlobalStyle } from "./src/assets/styles/GlobalStyles";

import { highlightLinks } from "./src/utils/highlightLinks";
import { fadeInProject } from "./src/utils/fadeInProject";
import { logVisitor } from "./src/services/logVisitor";
import { handleScroll } from "./src/utils/handleScroll";

export const onInitialClientRender = () => {
  //highlight active jump link
  highlightLinks();

  handleScroll();
  fadeInProject();

  //get user ip and send through netlify function to google sheets
  logVisitor();
};

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
