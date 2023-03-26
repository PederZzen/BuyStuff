import styled from "styled-components";
import { color } from "../../../utils/constants";

export const Button = styled.button `
    padding: .5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    position: relative;
`

export const CartNumber = styled.div `
    background-color: ${color.main};
    color: white;
    border-radius: 50%;
    font-size: .8rem;
    height: 1.2rem;
    width: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
`

export const CartItem = styled.li `
    display: flex;
    gap: .5rem;
    margin-bottom: .5rem;

    h3 {
        font-size: 1.2rem;
        font-weight: bold;
    }

    img {
        width: 5rem;
        height: 5rem;
        object-fit: cover;
        
    }
`

export const CartDetails = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const CartContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const Total = styled.div `
    font-size: 1.5rem;
    font-weight: bold;
`

export const Amount = styled.div `
    display: flex;
    gap: .5rem;
    align-items: center;

    button {
        background-color: ${color.main};
        opacity: .7;
        color: white;
        border: none;
        padding: .1rem .3rem;
        cursor: pointer;
        transition: all .3s;

        &:hover {
            opacity: 1;
        }
    }
`