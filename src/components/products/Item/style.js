import styled from "styled-components";

export const Image = styled.img `
    width: 100%;
    height: 20rem;
    object-fit: cover;
    transition: .4s all;
`

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.5rem;
    overflow: hidden;
    position: relative;

    p {
        font-weight: bold;
        letter-spacing: .1rem;
        margin-top: 1rem;
    }

    h2 {
        color: gray;
    }

`

export const OnSale = styled.div `
    position: absolute;
    background-color: red;
    color: white;
    padding: .5rem 2rem;
    left: 0;
    border-bottom: 4px solid white;
    border-bottom-right-radius: 50%;
    font-weight: bold;
`