import { createGlobalStyle } from "styled-components";
import { showElements } from "../../utils/showElements";

export const GlobalStyle = createGlobalStyle`

*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


// Universal scrollbar styling 

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(137, 132, 132, 0.7) transparent;
  
  ${(props) => props.theme.mq.sm} {
    scrollbar-width: 1px;
  }
}

// Alternative scrollbar styling except for Frefox browser
  ::-webkit-scrollbar {
    width: 10px;
  
    ${(props) => props.theme.mq.sm} {
      width: 0px;
    }
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(137, 132, 132, 0.7);
    border-radius: 10px;
  
  }


body {
  color: white;
  font-size: 16px;
  overflow: hidden;
  font-family: ${(props) => props.theme.font.family.inter};
  background-color: black;
}

.container {
  z-index: 10;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  scroll-padding-top: 25vh;
}

nav, section:not(#projects) {
  opacity: 0;
  /* animation: fade-in 2s 1s ease-in forwards; */
  animation-name: fade-in;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}
${showElements}

@keyframes fade-in {
  to {
    opacity: 1;
    
  }
}

`;
