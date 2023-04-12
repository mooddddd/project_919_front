// import { MyPageClickContent } from './mypage/MyPageClickContent'
import { useState } from 'react'
import {
MyWrapper,
MyBackground,
MyHeaderLogo,
MyHeaderWrap,
MyBodyWrapper,
MyInfoData,
MyInfoUserData,
MyInfoBtn,
} from '../styled'
import { MyInfo, MyList } from './mypage'

export const MyPageContent = () => {
const [menu, setMenu] = useState(true)
const getMyInfoHandler = (e) => {
setMenu(true)
}
const getMyListHandler = (e) => {
setMenu(false)
}

return (
<>
    <MyWrapper>
    <MyBackground>
        <MyInfoData>
            <MyInfoBtn onClick={getMyInfoHandler}>정보수정 </MyInfoBtn>
            <MyInfoBtn onClick={getMyListHandler}> 파티관리 </MyInfoBtn>
        </MyInfoData>
        <MyHeaderWrap>
        <MyHeaderLogo> 
            My Page
        </MyHeaderLogo>
        </MyHeaderWrap> 
        <MyBodyWrapper>
        <MyInfoUserData>
            {menu ? <MyInfo /> : <MyList />}
        </MyInfoUserData>
        </MyBodyWrapper>
    </MyBackground>
    </MyWrapper>
</>
)
}
