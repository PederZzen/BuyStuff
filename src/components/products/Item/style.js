import styled from "styled-components";
import { color } from "../../../utils/constants";

export const Image = styled.img `
    width: 100%;
    height: 20rem;
    object-fit: cover;
    transition: .4s all;

    &:hover {
        width: 120%;;
    }
`

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
    overflow: hidden;

`

export const Button = styled.button `
    font-size: 1rem;
    border: 1px solid ${color.main};
    background-color: transparent;
    border-radius: 3px;
    color: ${color.main};
    padding: .5rem;
    cursor: pointer;
    transition: .3s all;

    &:hover {
        background-color: ${color.main};
        color:  white;
    }
`