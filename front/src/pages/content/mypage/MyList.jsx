import { useState, useEffect } from 'react'
import { request } from '../../../utils'
import { getCookie } from '../../../utils'

// const publicPath = process.env.PUBLIC_URL

export const MyList = ({ listData }) => {
  const [myList, setMyList] = useState('리스트 테스트')

  const token = getCookie('token')

  useEffect(() => {
    ;(async () => {
      try {
        const data = await request.get('user/mylist', {
          headers: { Authorization: `Bearer ${token}` },
        })
        console.log(data)
      } catch (e) {
        throw new Error(e)
      }
    })()
  }, [])
  // 파티는 어차피 많아봤자 몇 개 없을거니까 한꺼번에 가져와도 ㄱㅊ을 것 같음

  return <>mylist : {listData}</>
}
