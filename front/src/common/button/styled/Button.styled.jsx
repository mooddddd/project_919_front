import styled from "styled-components";

export const ButtonStyled = styled.button`
 display: block;
 margin: 0 auto;
 border: none ;
 border-radius: 0.3rem;
 width: ${({width})=>width};
 height: ${({height})=>height};
 background: #FF5858;
 color: white;


 &:hover {
    background: #ff8f8f;
 }
`