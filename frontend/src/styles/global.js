import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background-color: #caf0f8;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: #CAF0F8;
  }
  a{
      text-decoration: none;
      color: #CAF0F8;
  }
  button {
    cursor: pointer;
  }
  li{
    list-style: none;
  }
`;