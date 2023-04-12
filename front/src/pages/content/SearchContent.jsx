import { request } from '../../utils'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BoardLayout } from '../../common'

export const SearchContent = () => {
  const { keyword } = useSelector((state) => state.search)
  const [searchResult, setSearchResult] = useState([])

  if (window.location.pathname === '/search') {
    alert('잘못된 접근입니다!')
    window.history.back()
  }

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await request.get(`search/${keyword}`)
        console.log(data)
        setSearchResult(data)
        // }
      } catch (e) {
        throw new Error(e)
      }
    })()
  }, [keyword])

  const list = searchResult.map((v) => {
    return (
      <div key={v.recruitIndex}>
        <img src={v['ottPlan.platformImage']} />
        <a>{v.title}</a>
        <span></span>
        <span>{v['User.userNick']}</span>
      </div>
    )
  })

  return (
    <>
      <BoardLayout>
        <div>"{keyword}"에 관한 검색 결과</div>
        <div>{searchResult.length === 0 ? '관련 게시물이 없습니다' : list}</div>
      </BoardLayout>
    </>
  )
}
