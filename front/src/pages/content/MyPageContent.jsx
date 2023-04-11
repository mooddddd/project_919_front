// import { MyPageClickContent } from './mypage/MyPageClickContent'
import { useState } from 'react'
import {
  MyWrapper,
  MyBackground,
  MyHeaderLogo,
  MyHeaderWrap,
  MyBodyWrapper,
} from '../styled'
import { MyInfo, MyList } from './mypage'

export const MyPageContent = () => {
  const [menu, setMenu] = useState(true)
  const getMyInfoHandler = (e) => {
    setMenu(true)
  }
  const geyMyListHandler = (e) => {
    setMenu(false)
  }

  return (
    <>
      <MyWrapper>
        <MyBackground width="90%">
          <MyHeaderWrap>
            <MyHeaderLogo>My Page</MyHeaderLogo>
          </MyHeaderWrap>

          <MyBodyWrapper>
            <div className="nav">
              <ul>
                <li onClick={getMyInfoHandler}>정보 수정</li>
                <li onClick={geyMyListHandler}>파티 관리</li>
              </ul>
            </div>
            {menu ? <MyInfo /> : <MyList />}
          </MyBodyWrapper>
        </MyBackground>
      </MyWrapper>
    </>
  )
}