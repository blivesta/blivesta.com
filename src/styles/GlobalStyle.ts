import { createGlobalStyle } from 'styled-components';
import { fadeIn } from './theme';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.baseText[0]};
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.5;
  }

  img,
  svg {
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${props => props.theme.colors.baseText[0]};
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
  }

  /* For webfont */
  .js-content {
    opacity: 0;
  }

  .wf-active .js-content {
    animation: ${fadeIn} .5s linear;
    animation-fill-mode: both;
  }
`;
