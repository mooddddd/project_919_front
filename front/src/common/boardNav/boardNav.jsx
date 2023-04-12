import { Wrap, Nav } from './styled'
import { Button } from '../Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../hooks'
import { InputStyled } from '../box/styled'
import { useSelector, useDispatch } from 'react-redux'
import {
  searchSuccess,
  searchFailure,
} from '../../store/search/search.action.controller'

export const BoardNav = () => {
  const dispatch = useDispatch()
  const { isLoading, error, keyword } = useSelector((state) => state.search)

  const navigator = useNavigate()
  const searchItem = useInput('')

  const clickHandler = async (e) => {
    e.preventDefault()
    if (searchItem.value === '') {
      alert('검색어를 입력해주세요')
      return
    }
    try {
      dispatch(searchSuccess(searchItem.value)) // 검색어가 키워드에 저장!(전역으로 관리 가능)
      navigator(`/search/${searchItem.value}`) // 그리고 바로 url 변경해줌, 그러면 search 쪽에서 랜더링
    } catch (e) {
      dispatch(searchFailure(error))
    }
  }

  if (isLoading) return <>로딩중</>
  if (error) {
    alert('잘못된 접근입니다')
  }

  return (
    <>
      <Wrap>
        <Nav>
          <ul>
            <li>
              <NavLink to="/community/recruit/list">파티구하기</NavLink>
            </li>

            <li>
              <NavLink to="/community/info/list">정보</NavLink>
            </li>

            <li>
              <NavLink to="/community/free/list">잡담</NavLink>
            </li>
          </ul>
          <div>
            <InputStyled
              width="12rem"
              height="1.3rem"
              {...searchItem}
              placeholder="검색어를 입력해주세요"
            />
            {'  '}
            <Button
              width="3rem"
              height="1.8rem"
              color="red"
              type="submit"
              onClick={clickHandler}
            >
              검색
            </Button>
          </div>
        </Nav>
      </Wrap>
    </>
  )
}

export default BoardNav
