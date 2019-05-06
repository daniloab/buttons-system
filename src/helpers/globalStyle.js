import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        height: 100%;
        font-size: 62.5%
    }

    body {    
        display: flex;
        justify-content: center;  
        height: 100%;
        
        background: #000000c2;
        font-family: 'Open Sans', sans-serif !important;
        
        button {
            margin: 5px;
        }
    }

    h1, h2 {
        color: white;
        border-bottom: 1px solid white;
        text-shadow: 0 0 1.5px black;
      }
`;

export default GlobalStyle;