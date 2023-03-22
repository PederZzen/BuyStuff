import styled from "styled-components";

export const Image = styled.img `
    width: 100%;
    height: 15rem;
    object-fit: cover;
`

export const Wrapper = styled.div `
    max-height: 20rem;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
`

export const Button = styled.button `
    display: block;
    font-size: 1rem;
    background-color: beige;
    border: none;
    padding: .5rem;
    cursor: pointer;
`