import {ButtonStyled} from "./styled/Button.styled"

export const Button = ({children, width, height, type})=>{

    return (
        <ButtonStyled width={width} height={height} type={type}>{children}</ButtonStyled>
    )
}