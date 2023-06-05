import styled from "styled-components";

export const RegisterFormStyled = styled.form`
    width: 23rem;
    height: fit-content;
    background-color: var(--color-brand-200);
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;

    padding: 2rem;
    margin-top: 1rem;

    border-radius: .5rem;

    input{
        width: 20rem;

        border: 1px solid;
        border-radius: .5rem;
        padding: .5rem 1rem;
    }

    button{
        width: 9rem;
        font-size: var(--font-size-200);
        font-family: var(--font-family-inter);

        padding: .5rem;

        border:none;
        border-radius: .5rem;
    }

    button:hover{
        background-color: var(--grey-1);
    }
`