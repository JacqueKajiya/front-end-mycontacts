import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root{
            

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

    button{
        cursor: pointer;
    }

`