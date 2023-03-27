import {TextStyled} from "./styled/Textarea.styled"

export const Textarea = ({children,width,height, placeholder}) => {
    return (
        <>
        <TextStyled width={width} height={height} placeholder={placeholder}>{children}</TextStyled>
        </>
    )
}