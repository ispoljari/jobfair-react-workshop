import { normalize } from "styled-normalize";
import { createGlobalStyle, css } from "styled-components";
import { PAGES } from "./pages";

export const GlobalStyles = createGlobalStyle`
  ${normalize};

  html {
    box-sizing: border-box;
    font-size: calc(1em + 0.5vw);
    line-height: calc(1.1em + 0.5vw);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

	body {
    margin: 0;
    padding: 0;
    font-size: 1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    transition: background-color 300ms linear, color 500ms linear;

    ${(props) => {
      if (props.pageId === PAGES.aboutPage.id) {
        return css`
          background-color: #ffba57;
        `;
      } else if (props.pageId === PAGES.referencesPage.id) {
        return css`
          background-color: #00dfcf;
        `;
      } else if (props.pageId === PAGES.blogsPage.id) {
        return css`
          background-color: #ffc8bb;
        `;
      }
    }}

  h1 {
    font-size: calc(2rem);
    letter-spacing: 0.1em;
    line-height: normal;

    ${(props) => {
      if (props.pageId === PAGES.blogsPage.id) {
        return css`
          color: #004149;
        `;
      } else {
        return css`
          color: #fff;
        `;
      }
    }}
  }

  h2 {
    font-size: calc(1.5rem);
    letter-spacing: 0.2em;
    color: #004149;
  }

  h1, h2 {
    font-family: 'Roboto', sans-serif;
  }

  p {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, p {
    margin: 0;
  }
`;
