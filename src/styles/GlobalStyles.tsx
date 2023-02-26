import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #f2efaa;
  font-family: "Basier circle", Geneva, Tahoma, sans-serif, sans-serif; ;
}

a,
a:focus,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button, input  {
  font-family: inherit;
}

button {
  padding: 0;
  border: none;
  outline: none;
  color: inherit;
  background: none
}

div.container {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyles;
