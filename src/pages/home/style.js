import styled from "styled-components";

export const Wrapper = styled.div `
    padding-top: 10rem;

    h1 {
        font-size: 2.4rem;
        text-align: center;
    }

    h2 {
        text-align: center;
        margin: .8rem;
        font-size: 1.2rem;
        font-weight: normal;
    }
`

export const ProductsContainer = styled.div `
    margin: auto;
    max-width: 1200px;
    padding-top: 4rem;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 1rem;
`