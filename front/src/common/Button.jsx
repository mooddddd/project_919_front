import styled from "styled-components";

const ButtonStyled = styled.button`
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

export const Button = ({children, width, height, type, onClick})=>{

    return (
        <ButtonStyled width={width} height={height} type={type} onClick={onClick}>{children}</ButtonStyled>
    )
}