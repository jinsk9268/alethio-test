import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *{
    margin: 0px;
    padding: 0px;
    box-sizing:border-box;
  }

  body {
    font-size:16px;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }

  a{
    text-decoration:none;
    color:inherit;
    cursor: pointer;
  }

  ol,
  ul,
  li{
    list-style: none;
  }

  input:focus,
  button:focus,
  select:focus,
  textarea:focus{
    outline: none;
  }

  button{
    cursor: pointer;
    border: none;
  }
`;

export default GlobalStyle;
