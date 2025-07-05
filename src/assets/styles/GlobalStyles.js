import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 15px;

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
  font-family: ${(props) => props.theme.font.family.inter}
}

.body {
  z-index: 10;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  scroll-padding-top: 25vh;
}


`;
