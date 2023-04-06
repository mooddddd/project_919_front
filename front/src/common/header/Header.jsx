import { NavLink } from 'react-router-dom'
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
import { USER_LOGOUT } from '../../store/user'
import { LogoutRequest } from '../../utils'

export const Header = () => {
  const dispatch = useDispatch()
  const { isLogin, data } = useSelector((state) => state.user)
  const logoutAction = () => {
    LogoutRequest()
    dispatch({ type: USER_LOGOUT })
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
            {isLogin ? (
              <TagFont> 환영합니다 {data.userNick} 님</TagFont>
            ) : (
              <></>
            )}
          </Wrap>
          <Wrap>
            <NavLink to="/">
              <TagFont>Main</TagFont>
            </NavLink>
          </Wrap>
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
          {isLogin ? (
            <>
              <Wrap>
                <NavLink to="/mypage">
                  <TagFont>MyPage</TagFont>
                </NavLink>
              </Wrap>
              <Wrap>
                <NavLink to="/logout" onClick={logoutAction}>
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
