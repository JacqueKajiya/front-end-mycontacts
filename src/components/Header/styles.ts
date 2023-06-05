import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: var(--color-brand-200);
    color: white;

    border-bottom: 1px solid;
    padding: 1.5rem;

    div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    button{
        width: 16rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;

        font-family: var(--font-family-inter);
        border: none;

        border-radius: 0.5rem;
    }

    .exitButton{
        font-size: 2rem;
        background-color: transparent;
        color: white;
    }

    .addContactText{
        display: none;
    }

    .newContact{
        background-color: transparent;
        color: white;

        font-size: 2rem;
        border: none;
    }

    @media(min-width: 400px){
        .newContact{
            width: 30rem;
            font-size: 1.5rem;
            background-color: var(--grey-1);

            padding: 1.5rem;
        }

        .addContactImg{
            display: none;
        }

        .addContactText{
            display: block;
        }

        .addContactText:hover{
            color: white;
            background-color: var(--grey-1);
            transition: .5s ease;
        }

    }
`