import { Rate } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div `
    div {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
    margin-bottom: 2rem;

`

export const Rating = styled(Rate) `
    font-size: .8rem;
    display: flex;
`