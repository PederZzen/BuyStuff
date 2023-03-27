import styled from "styled-components";
import { color } from "../../utils/constants";

export const Wrapper = styled.div `
    margin: 10rem auto;
    padding: 0 1rem;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    img {
        width: 20rem;
        object-fit: contain;
        border-radius: 1rem;
    }

    button {
        margin-top: 2rem;
    }

    @media (max-width: 550px) {
        display: flex;
        flex-direction: column;

        img {
            width: 100%;
        }
    }

`

export const Price = styled.div `
    font-size: 1.2rem;
    margin: 1.5rem 0;
`

export const OldPrice = styled.span `
    text-decoration: line-through;
    font-size: 1rem;
`

export const NewPrice = styled.span `
    color: ${color.main};
    margin-right: 1rem;
`

export const ImageContainer = styled.div `
    display: flex;
    justify-content: center;
    position: relative;
`

export const Percentage = styled.div `
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    left: 0;
    top: -2rem;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    background-color: ${color.main};
`

export const Info = styled.div `
    margin-top: 1rem;
    grid-column: span 2;

    h2 {
        margin: 3rem 0 1rem;
    }
`