import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

 @font-face {
    font-family: 'Orbitron';
    src: url('/fonts/Orbitron/static/Orbitron-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }


  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0.5em 0;
  }

  p {
    margin: 0.75em 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    margin: 1em 0;
    padding-left: 40px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
