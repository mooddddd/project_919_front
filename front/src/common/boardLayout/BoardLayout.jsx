import {Wrap, ContentWrap} from "./styled"

export const BoardLayout = ({children}) =>{
    return <Wrap>
        <ContentWrap>
        {children}
        </ContentWrap>
        </Wrap>
}