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