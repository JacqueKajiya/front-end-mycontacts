import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 0 auto;
    padding: 1.25rem;

    .formContainer{
        width: 25rem;
        height: 32rem;
        background-color: var(--color-brand-200);
        color: white;

        display: flex;
        flex-direction: column;

        align-items: center;
        padding: 2rem;
        border-radius: .5rem;
    }

    button{
        width: 9rem;
        font-size: var(--font-size-300);
        font-family: var(--font-family-inter);

        padding: .5rem;

        border:none;
        border-radius: .5rem;
    }

    button:hover{
        background-color: var(--grey-1);
    }
`

export const LoginFormStyled = styled.form`
    width: 23rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;

    padding-bottom: 1.25rem;
    margin-top: 1rem;

    input{
        width: 20rem;

        border: 1px solid;
        border-radius: .5rem;
        padding: .5rem 1rem;
    }
`