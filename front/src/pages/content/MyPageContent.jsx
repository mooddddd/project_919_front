// import { MyPageClickContent } from './mypage/MyPageClickContent'
import { useState } from 'react'
import {
  MyWrapper,
  MyBackground,
  MyHeaderLogo,
  MyHeaderWrap,
  MyBodyWrapper,
  MyInfoData,
  MyInfo,
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

  const infoData = myInfo // 엑시오스로 가져와서 상태변경

  return (
    <>
    <MyWrapper>
      <MyBackground>
        <MyHeaderWrap>
          <MyHeaderLogo>
            My Page
          </MyHeaderLogo>
        </MyHeaderWrap>
        <MyBodyWrapper>
          <MyInfoData>
          {menu ? (
            <MyInfoView infoData={infoData} setMyInfo={setMyInfo} />
            ) : (
              <MyList infoData={infoData} setMyInfo={setMyInfo}/>
              )}
          </MyInfoData>
          <MyInfo>
            <MyInfoBtn>
              <button onClick={getMyInfoHandler}> 정보수정 </button>
            </MyInfoBtn>
            <MyInfoBtn>
              <button onClick={getMyListHandler}> 파티관리 </button>
            </MyInfoBtn>
          </MyInfo>
        </MyBodyWrapper>
      </MyBackground>
    </MyWrapper>
    </>
  )
}

