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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;

    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr ;
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr ;
    }
`

export const InputContainer = styled.div `
    width: 20rem;
    margin: 2rem auto 0;
`