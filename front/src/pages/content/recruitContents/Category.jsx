import { CategoryStyled } from '../../styled'
import { NavLink } from 'react-router-dom'
import { Button } from '../../../common'
import { useState } from 'react'

export const Category = () => {
  const [category, SetCategory] = useState(false)
  const clickEvent = (e) => {
    console.log(e.target)
  }
  return (
    <>
      <CategoryStyled>
        <ul>
          <li>
            <NavLink to="#">전체</NavLink>
          </li>
          <li>
            <NavLink to="#">유튜브</NavLink>
          </li>
          <li>
            <NavLink to="#">넷플릭스</NavLink>
          </li>
          <li>
            <NavLink to="#">디즈니플러스</NavLink>
          </li>
          <li>
            <NavLink to="#">티빙</NavLink>
          </li>
          <li>
            <NavLink to="#">왓챠</NavLink>
          </li>
          <li>
            <NavLink to="#">웨이브</NavLink>
          </li>
        </ul>

        <Button width="10rem" height="2rem" color="red">
          <NavLink to="/community/recruit/write">파티장 되기</NavLink>
        </Button>
      </CategoryStyled>
    </>
  )
}
