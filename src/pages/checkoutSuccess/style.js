import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color } from "../../utils/constants";

export const Wrapper = styled.div `
    max-width: 1200px;
    height: 100vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`

export const Icon = styled(FontAwesomeIcon) `
    color: ${color.main};
    font-size: 5rem;
`