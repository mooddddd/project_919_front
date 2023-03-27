import styled from "styled-components";

export const TextStyled = styled.textarea`
    padding: 0.2rem;
    border: none;
    border-radius: 0.3rem;
    width: ${({width})=>width};
    height: ${({height})=>height};
    resize: none;
`