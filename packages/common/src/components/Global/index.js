import 'normalize.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    -webkit-tap-highlight-color: transparent;
    ${props => props.theme.body}
  }

  .sticky {
    z-index: ${props => props.theme.zIndex?.sticky ?? 1010};
  }

  a {
    cursor: pointer;
  }

  ${props => props.theme.global}
`;
