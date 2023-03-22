import styled from "styled-components";

export const Wrapper = styled.nav `
    position: fixed;
    top: 0;
    background-color: beige;
    padding: 1.5rem;
    width: 100%;
`

export const Menu = styled.div `
    display: flex;
    align-items: center;

    * {
        padding: 0 2rem;

        &:nth-child(1) {
            padding-left: 0;
        }
    }
`

export const Content = styled.div `
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`