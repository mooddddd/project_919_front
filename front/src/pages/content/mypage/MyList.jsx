import { useState, useEffect } from 'react'
import { request } from '../../../utils'
import { getCookie } from '../../../utils'
import { NavLink } from 'react-router-dom'

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
      <div>
        <span>내가 쓴 글 :</span>
        {listFunc(myPost)}
      </div>
      <div>
        <span>내가 참여한 글 :</span>
        <div>{listFunc(myList)}</div>
      </div>
      <div>
        <span>관심있는 글 :</span>
        <div>{listFunc(myLike)}</div>
      </div>
    </>
  )
}
