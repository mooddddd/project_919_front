import { request } from '../../utils'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BoardLayout } from '../../common'
import {
  Wrapper,
  ImgSize,
  TableStyled,
  TrStyled,
  TitelTrStyled,
} from '../styled/search'

const publicPath = process.env.PUBLIC_URL

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
    const data = v['createdAt'].split(' ')
    return (
      <TrStyled key={v.recruitIndex} className="post">
        <td className="platform">
          <ImgSize src={`${publicPath}${v['ottPlan.platformImage']}`} />
        </td>
        <td className="title">
          <a href={`/community/recruit/view/${v.recruitIndex}`}>{v.title}</a>
        </td>
        <td className="nickname">
          <p>{v['User.userNick']}</p>
        </td>
        <td className="date">
          <p>{data[0]}</p>
        </td>
      </TrStyled>
    )
  })

  return (
    <>
      <BoardLayout>
        <Wrapper>
          <div className="searchTop">
            <img src={`${publicPath}/img/searchIcon.png`} /> "{' '}
            <span>{keyword}</span> "에 관한 검색 결과입니다.{' '}
            <img src={`${publicPath}/img/searchIcon.png`} />
          </div>
          <div className="searchBottom">
            {searchResult.length === 0 ? (
              <div>관련 게시물이 없습니다.</div>
            ) : (
              <TableStyled>
                <TitelTrStyled>
                  <th className="platform">플랫폼</th>
                  <th className="title">제목</th>
                  <th className="writer">작성자</th>
                  <th className="date">작성일</th>
                </TitelTrStyled>
                {list}
              </TableStyled>
            )}
          </div>
        </Wrapper>
      </BoardLayout>
    </>
  )
}
