import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --background: ${(props) => props.theme.colors.background};
    --background-box: ${(props) => props.theme.colors.backgroundBox};
    --background-overlay: ${(props) => props.theme.colors.backgroundOverlay};
    
    --gray-line: ${(props) => props.theme.colors.grayLine};
    --text: ${(props) => props.theme.colors.text};
    --text-highlight: ${(props) => props.theme.colors.textHighlight};
    --title: ${(props) => props.theme.colors.title};
    --red: ${(props) => props.theme.colors.red};
    --green: ${(props) => props.theme.colors.green};
    --blue: ${(props) => props.theme.colors.blue};
    --blue-dark: ${(props) => props.theme.colors.blueDark};
    --blue-twitter: ${(props) => props.theme.colors.blueTwitter};
    --box-shadow: ${(props) => props.theme.boxShadow}
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--text);
  }
  
  body,
  input,
  textarea,
  button {
    font: 400 1rem "Inter", sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
