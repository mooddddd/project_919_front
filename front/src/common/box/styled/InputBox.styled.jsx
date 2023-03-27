import styled from "styled-components"

export const InputStyled = styled.input`
    border: none;
    border-radius: 0.3rem;
    padding: 0.2rem;
    width: ${({width})=>width};
    height: ${({height})=>height};
&::placeholder{
    color: #6F6F6F;
}
`
