import styled from "styled-components";
import { color } from "../../../utils/constants";

export const Wrapper = styled.header `
    box-shadow: 0 0 1px .5px ${color.main};
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 1;
`

export const Content = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding: 1rem;

    @media (min-width: 1200px) {
        padding: 1rem 0;

    }
`

export const Logo = styled.p `
    font-size: 1.5rem;
    font-weight: bold;
`

export const MenuIcon = styled.button `
    background-color: transparent;
    border: none;
    font-size: 1.3rem;
    color: ${color.main};
`

export const Menu = styled.div `
    display: flex;
    align-items: center;
    gap: 3rem;

    *:hover {
        color: ${color.main};
    }
`