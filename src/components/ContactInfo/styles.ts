import styled from "styled-components";

export const StyledList = styled.ul`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    gap: 2rem;

    background-color: var(--color-brand-200);

    margin: 1.5rem;
    padding: 1.5rem;
    border-radius: .5rem;

    li{
        width: 100%;
        height: 100%;
        line-height: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        font-size: var(--font-size-200);
        background-color: var(--grey-1);

        padding: 1.5rem;
        border-radius: .5rem;
    }

    li:hover{
        background-color: var(--grey-0);
        transition: .5s ease;
    }

    .buttonBox{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button{
        background-color: transparent;
        color: black;

        border: none;
    }

    button:hover{
        color: var(--color-brand-100);
        transition: .5s ease;
    }

    @media(min-width: 450px){
        li{
            width: 40rem;
        }

        button{
            font-size: 2rem;
        }
    }

`
