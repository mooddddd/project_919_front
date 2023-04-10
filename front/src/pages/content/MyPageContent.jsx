// import { MyPageClickContent } from './mypage/MyPageClickContent'
import { useState } from 'react'
import {
  MyWrapper,
  MyBackground,
  MyHeaderLogo,
  MyHeaderWrap,
  MyBodyWrapper,
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
  const geyMyListHandler = (e) => {
    setMenu(false)
  }

  const infoData = myInfo // 엑시오스로 가져와서 상태변경
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
            {menu ? (
              <MyInfoView infoData={infoData} setMyInfo={setMyInfo} />
            ) : (
              <MyList />
            )}
          </MyBodyWrapper>
        </MyBackground>
      </MyWrapper>
    </>
  )
}
