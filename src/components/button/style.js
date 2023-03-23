import styled from "styled-components";
import { color } from "../../utils/constants";

export const ButtonStyle = styled.button `
    display: block;
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