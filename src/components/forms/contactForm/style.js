import styled from "styled-components";
import { color } from "../../../utils/constants";

export const FormStyled = styled.form `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 30rem;
    margin: 2rem auto;

    input, 
    textarea {
        padding: .5rem;
        font-size: 1rem;
        outline: none;

        &:focus {
            border: 2px solid ${color.main};
        }
    }

    span {
        color: red;
    }

    button {
        width: 15rem;
        margin: auto;
        background-color: ${color.main};
        color: white;

        &:hover {
            background-color: white;
            color: ${color.main};
        }
    }
`