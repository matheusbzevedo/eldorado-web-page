import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, :root{
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    overflow: hidden;

  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 1.6rem 'Reem Kufi', 'Dolce Vita', sans-serif;
  }

  @font-face {
    font-family: 'Dolce Vita';
    src: url('./fonts/Dolce Vita.ttf') format('truetype'),
      url('./fonts/Dolce Vita Light.ttf') format('truetype'),
      url('./fonts/Dolce Vita Heavy Bold.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Reem Kufi';
    src: url('./fonts/ReemKufi-Regular.ttf') format('truetype');
    font-display: swap;
  }
`;
