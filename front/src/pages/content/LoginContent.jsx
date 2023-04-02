import { NavLink } from "react-router-dom";
import {
  LoginCover,
  LoginWrapper,
  LoginWrap,
  LoginHeader,
  LoginLogo,
  LoginBody,
  InputBox,
  LoginBtn,
  LoginBtnLogo,
  Infobox,
  LogInformation,
  KakaoLogin,
  NaverLogin,
  KakaoLogo,
  NaverLogo,
} from "../styled";
// import React, { useState } from "react"

export const LoginContent = () => {
  const path = "/signup";
  return (
    <>
      <LoginWrapper>
        <LoginCover>
          <LoginWrap>
            <LoginHeader>
              <NavLink>
                <LoginLogo>SignIn</LoginLogo>
              </NavLink>
            </LoginHeader>
            <LoginBody>
              <InputBox
                name="userId"
                id="userId"
                type="text"
                placeholder="👤 아이디를 입력해주세요"
              />
              <InputBox
                name="userPw"
                id="userPw"
                type="text"
                placeholder="🔒 비밀번호를 입력해주세요"
              />
              <LoginBtn type="submit">
                <LoginBtnLogo>로그인</LoginBtnLogo>
              </LoginBtn>
              {/* <Infobox> */}
              <LogInformation>
                <span>
                  <NavLink to={path}>회원가입</NavLink>
                </span>
                <span>
                  <NavLink to="#">아이디/비번 찾기</NavLink>
                </span>
              </LogInformation>
              {/* </Infobox> */}
              <KakaoLogin type="submit">
                <img class="kakaologin" src="img/kakao.png" alt="kakaolog" />
                <KakaoLogo>카카오 로그인</KakaoLogo>
              </KakaoLogin>
              <NaverLogin type="submit">
                <img
                  class="naverlogin"
                  src="img/naverlogo.png"
                  alt="naverlog"
                />
                <NaverLogo>네이버 로그인</NaverLogo>
              </NaverLogin>
            </LoginBody>
          </LoginWrap>
        </LoginCover>
      </LoginWrapper>
    </>
  );
};
