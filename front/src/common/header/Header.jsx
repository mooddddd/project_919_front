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
const publicPath = process.env.PUBLIC_URL

export const Header = () => {
  const isLogin = useSelector((state) => state.user.isLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cookieName = 'token'

  const deleteCokie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
  }

  const handleLogout = async (e) => {
    e.preventDefault()
    await dispatch(logoutUser())
    deleteCokie(cookieName)
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
              <img
                className="logoimg"
                src={`${publicPath}/img/logo.png`}
                alt="logoicon"
              />
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
                <div onClick={handleLogout}>
                  <TagFont>Logout</TagFont>
                </div>
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
