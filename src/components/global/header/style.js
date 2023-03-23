import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../../utils/constants";

export const Wrapper = styled.nav `
    position: fixed;
    top: 0;
    background-color: white;
    padding: 1.5rem;
    width: 100%;
    z-index: 99;
    box-shadow: 0 0 2px ${color.main};
`

export const Menu = styled.div `
    display: flex;
    align-items: center;

    * {
        margin: 0 2rem;

        &:nth-child(1) {
            padding: 0;
            margin: 0 1rem 0 0;
        }
    }
`

export const Content = styled.div `
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

