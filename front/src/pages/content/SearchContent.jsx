import { request } from '../../utils'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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
  }, [])

  const list = searchResult.map((v) => {
    return (
      <div key={v.recruitIndex}>
        <a>{v.title}</a>
      </div>
    )
  })

  return (
    <>
      <div>{keyword}에 관한 검색 결과</div>
      <div>{searchResult.length === 0 ? '관련 게시물이 없습니다' : list}</div>
    </>
  )
}
