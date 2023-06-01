import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;

    header{
        background-color: #bbb;
    }

    main{
        display: flex;
        gap: 20px;
    }
`

export const ContactList = styled.ul`
    /* background-color: ; */
    height: 100vh;
    width: 500px;
    list-style: none;
`