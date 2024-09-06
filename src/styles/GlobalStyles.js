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
    font-smoothing: antialiased;  
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-size: 16px;  
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0.5em 0;
    font-family: 'Orbitron', Arial, sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};  
  }

  h1 {
    font-size: 2.5rem;  
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin: 0.75em 0;
    color: ${(props) => props.theme.colors.text};
    line-height: 1.8;  
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.accent};  
    }
  }

  ul, ol {
    margin: 1em 0;
    padding-left: 40px;
    list-style-type: disc;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px; 
  }

  button {
    font-family: inherit;
    font-size: 16px;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    
    &:hover {
      opacity: 0.9; 
    }
  }

  input, select, textarea {
    font-family: inherit;
    font-size: 16px;
    padding: 10px;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    
    &:focus {
      border-color: ${(props) => props.theme.colors.primary};
      outline: none;
      box-shadow: 0 0 5px ${(props) => props.theme.colors.primary}; 
    }
  }

  /* Form labels */
  label {
    margin-bottom: 0.5rem;
    display: block;
    color: ${(props) => props.theme.colors.text};
  }
`;

export default GlobalStyles;
