import {InputStyled} from "./styled/InputBox.styled"

export const Input = ({width, height, children, type, placeholder})=>{
    return (
        <InputStyled width={width} height={height} type={type} placeholder={placeholder}>{children}</InputStyled>
    )
}