import { NavLink, useNavigate } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  LogoFont,
  LogoIcon,
  TagFont,
  MenuWrap,
  Wrap,
} from './styled'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../store/user/user.action.controller'

export const Header = () => {
  const isLogin = useSelector((state) => state.user.isLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault()
    await dispatch(logoutUser())
    navigate('/')
  }
  return (
    <>
      <HeaderWrapper>
        <Logo>
          <NavLink to="/">
            <LogoFont>919</LogoFont>
          </NavLink>
          <NavLink to="/">
            <LogoIcon>
              <img className="logoimg" src="/img/logo.png" alt="logoicon" />
            </LogoIcon>
          </NavLink>
        </Logo>
        <MenuWrap>
          <Wrap>
            <TagFont></TagFont>
          </Wrap>
          {isLogin ? (
            <>
              <Wrap>
                <NavLink to="/calculator">
                  <TagFont>Calculator</TagFont>
                </NavLink>
              </Wrap>
              <Wrap>
                <NavLink to="/community/recruit/list">
                  <TagFont>Community</TagFont>
                </NavLink>
              </Wrap>

              <Wrap>
                <NavLink to="/mypage">
                  <TagFont>MyPage</TagFont>
                </NavLink>
              </Wrap>
              <Wrap>
                <NavLink to="#" onClick={handleLogout}>
                  <TagFont>Logout</TagFont>
                </NavLink>
              </Wrap>
            </>
          ) : (
            <>
              <Wrap>
                <NavLink to="/login">
                  <TagFont>Login</TagFont>
                </NavLink>
              </Wrap>
              <Wrap>
                <NavLink to="/signup">
                  <TagFont>SignUp</TagFont>
                </NavLink>
              </Wrap>
            </>
          )}
        </MenuWrap>
      </HeaderWrapper>
    </>
  )
}
