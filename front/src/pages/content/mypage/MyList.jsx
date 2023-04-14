import { useState, useEffect } from 'react'
import { request } from '../../../utils'
import { getCookie } from '../../../utils'
import { NavLink } from 'react-router-dom'
import {
  PartyWrapper,
  PartyMyWrite,
  MyPickWrite,
  PartyJoin,
  MyListWrap,
  MyParticipateWrap,
  MyPickWrap,
} from '../../styled'

export const MyList = () => {
  const [myList, setMyList] = useState(['리스트 테스트'])
  const [myLike, setMyLike] = useState(['조아요 테스트'])
  const [myPost, setMyPost] = useState(['등록된 글이 없습니다'])

  const token = getCookie('token')

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await request.get('user/mylist', {
          headers: { Authorization: `Bearer ${token}` },
        })
        const { myList, myLike, myPost } = data
        setMyList(myList)
        setMyLike(myLike)
        setMyPost(myPost)
      } catch (e) {
        throw new Error(e)
      }
    })()
  }, [])

  const listFunc = (list) => {
    const mapped = list.map((v) => {
      return (
        <div key={v.recruitIndex}>
          <NavLink to={`/community/recruit/view/${v.recruitIndex}`}>
            {v.title}
          </NavLink>
        </div>
      )
    })
    return mapped
  }

  return (
    <>
      <PartyWrapper>
        <MyListWrap>
          내가 작성한 글<PartyMyWrite>{listFunc(myPost)}</PartyMyWrite>
        </MyListWrap>
        <MyListWrap>
          나의 참가 글<PartyMyWrite>{listFunc(myList)}</PartyMyWrite>
        </MyListWrap>
        <MyListWrap>
          My Pick
          <PartyMyWrite>{listFunc(myLike)}</PartyMyWrite>
        </MyListWrap>
      </PartyWrapper>
    </>
  )
}
