import { css } from '@emotion/react';

const global = css`
  html,
  body {
    padding: 0px;
    margin: 0px;
    font-size: 62.5%;
    font-family: sans-serif;
    min-width: 340px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  span {
    font-size: 1.4rem;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0px;
  }

  h2 {
    font-size: 2rem;
  }
`;

export default global;
