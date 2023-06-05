import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root{
        --color-brand-100: #5B21FF;
        --color-brand-200: #242345;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;

        --font-size-100: 1.5rem;
        --font-size-200: 1.25rem;
        --font-size-300: 1rem;
        --font-size-400: .875rem;
        --font-size-500: .75rem;

        --font-family-inter: 'Inter', sans-serif;

        font-size: 60%;
    }

    @media(min-width: 700px){
        :root{
            font-size: 62.5%;
        }
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: var(--font-family-inter);
    }

    body, html{
        width: 100vw;
        height: 100vh;
    }

    body{
        /* background-color: ;
        color: ; */

        overflow-x: hidden;
    }

    body, input, button, textarea{
        font-family: 'Inter';
        font-size: 1.6rem;
    }

    ul, li{
        list-style: none;
    }

    button{
        cursor: pointer;
    }

`