import { NavLink } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  LogoFont,
  LogoIcon,
  TagFont,
  MenuWrap,
  Wrap,
} from "./styled";

export const Header = () => {
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
            <NavLink to="/">
              <TagFont>Main</TagFont>
            </NavLink>
          </Wrap>
          <Wrap>
            <NavLink to="/mypage">
              <TagFont>MyPage</TagFont>
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
          <Wrap>
            <NavLink to="/signup">
              <TagFont>SignUp</TagFont>
            </NavLink>
          </Wrap>
          <Wrap>
            <NavLink to="/login">
              <TagFont>Login</TagFont>
            </NavLink>
          </Wrap>
        </MenuWrap>
      </HeaderWrapper>
    </>
  );
};