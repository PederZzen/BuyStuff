import styled from "styled-components";
import { color } from "../../utils/constants";

export const ButtonStyle = styled.button `
    display: block;
    font-size: 1rem;
    border: 1px solid ${color.main};
    border-radius: 3px;
    padding: .5rem;
    cursor: pointer;
    transition: .3s all;
    background-color: ${color.main};
    color:  white;
    
    &:hover {
        background-color: transparent;
        color: ${color.main};
    }
`