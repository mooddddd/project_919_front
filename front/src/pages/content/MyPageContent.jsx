import { MyPageClickContent } from './mypage/MyPageClickContent'
import { useState } from 'react'
import {
  MyWrapper,
  MyBackground,
  MyHeaderLogo,
  MyHeaderWrap,
  MyBodyWrapper,
} from '../styled'

import { MyInfo, myList } from './mypage/MyInfo'
import { MyList } from './mypage/MyList'

export const MyPageContent = () => {
  const [test, setTest] = useState(true)
  const [myInfo, setMyInfo] = useState('내정보 테스트') // 엑시오스로 정보 가져온 거 여기에 정리해서 정보수정에 넘기기
  const [myList, setMyList] = useState('리스트 테스트') // 파티는 어차피 많아봤자 몇 개 없을거니까 한꺼번에 가져와도 ㄱㅊ을 것 같음

  const infoData = myInfo // 엑시오스로 가져와서 상태변경
  const listData = myList // 엑시오스로 가져와서 상태변경
  return (
    <>
      <MyWrapper>
        <MyBackground width="90%">
          <MyHeaderWrap>
            <MyHeaderLogo>My Page</MyHeaderLogo>
          </MyHeaderWrap>

          <MyBodyWrapper>
            <ul>
              <li
                onClick={(e) => {
                  setTest(true)
                }}
              >
                정보 수정
              </li>
              <li
                onClick={(e) => {
                  setTest(false)
                }}
              >
                파티 관리
              </li>
            </ul>
            {test ? (
              <MyInfo infoData={infoData} />
            ) : (
              <MyList listData={listData} />
            )}
          </MyBodyWrapper>
        </MyBackground>
      </MyWrapper>
    </>
  )
}
