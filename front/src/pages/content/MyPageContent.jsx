import { MyPageClickContent } from './mypage/MyPageClickContent'
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

import { MyInfoView, MyList } from './mypage'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserInfo } from '../../store/user/user.action.api'
import { getCookie } from '../../utils'

export const MyPageContent = () => {
  const navigator = useNavigate()
  const [menu, setMenu] = useState(true)
  const [myInfo, setMyInfo] = useState(['내정보 테스트'])

  const token = getCookie('token')

  useEffect(() => {
    ;(async () => {
      try {
        if (document.cookie === '') {
          navigator('/')
          return
        } else {
          const data = await getUserInfo(token)
          const { userId, userNick, phone, picture } = data
          //   console.log(userId, userNick, phone, picture)
          setMyInfo([userId, userNick, phone, picture])
        }
      } catch (e) {
        throw new Error(e)
      }
    })()
  }, [])

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

