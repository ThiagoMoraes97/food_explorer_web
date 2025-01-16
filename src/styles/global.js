import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    html, :root{
        font-size: 62.5%;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: white;
        font-size: 1.6rem;
    }

    input, button, textarea, select{
        font-size: 1.6rem;
    }


    button:hover , a:hover {
        filter: brightness(0.8);
        cursor: pointer;
        transition: filter 0.2s;
    }


`;