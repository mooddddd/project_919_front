import { Wrap, Nav } from './styled'
import { Button } from '../Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../hooks'
import { InputStyled } from '../box/styled'
import { request } from '../../utils'

export const BoardNav = () => {
  const navigator = useNavigate()
  const searchItem = useInput('')

  const clickHandler = async (e) => {
    e.preventDefault()
    const result = await request.get(`/search/${searchItem.value}`)
    console.log(result)
    navigator(`/search/${searchItem.value}`)
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
            <InputStyled width="12rem" height="1.3rem" {...searchItem} />
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
