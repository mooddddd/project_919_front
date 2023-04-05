import { NavLink } from 'react-router-dom'
import {
  LoginCover,
  LoginWrapper,
  LoginWrap,
  LoginHeader,
  LoginLogo,
  LoginBody,
  InputBox,
  LoginBtn,
  KakaoLogin,
  NaverLogin,
  KakaoLogo,
  NaverLogo,
  SignupBtn,
  Alert,
} from '../styled'
import { useState } from 'react'
import { request } from '../../utils/axios'
import { setCookie } from '../../utils/cookie'

const domain = process.env.REACT_APP_AXIOS_DOMAIN

const loginHandler = async (e, setAlertMessage, setAlertStatus) => {
  e.preventDefault()
  const userId = e.target.userId.value
  const userPw = e.target.userPw.value

  if (!userId) {
    setAlertMessage('아이디를 입력해주세요')
    setAlertStatus('error')
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userId)) {
    setAlertMessage(
      '아이디는 이메일로 이용됩니다. 올바른 이메일 형식이 아닙니다'
    )
    setAlertStatus('error')
    return
  }
  if (!userPw) {
    setAlertMessage('비밀번호를 입력해주세요')
    setAlertStatus('error')
    return
  }
  try {
    const response = await request.post(`${domain}/user/login`, {
      userId,
      userPw,
    })
    console.log(response.data)
    setAlertMessage('로그인 성공')
    setAlertStatus('sucess')

    if (response.data.message) {
      setAlertMessage(response.data.message)
    } else {
      const { token } = response.data
      setCookie('jwt_token', token, 0.5 / 24)
    }
  } catch (error) {
    console.error('Login Error:', error)
    setAlertMessage('로그인 중 오류가 발생했습니다.')
    setAlertStatus('error')
  }
}

export const LoginForm = () => {
  const [alertMessage, setAlertMessage] = useState('')
  const [alertStatus, setAlertStatus] = useState('')
  const path = '/signup'
  return (
    <>
      {alertMessage && (
        <Alert
          onAnimationEnd={() => {
            setAlertMessage('')
            setAlertStatus('error')
          }}
          style={{
            backgroundColor: alertStatus === 'success' ? '#4CAF50' : '#f44336',
          }}
        >
          {alertMessage}
        </Alert>
      )}
      <form
        onSubmit={(e) => loginHandler(e, setAlertMessage, setAlertStatus)}
        method="post"
      >
        <InputBox
          name="userId"
          id="userId"
          type="text"
          placeholder="👤 아이디를 입력해주세요"
        />
        <InputBox
          name="userPw"
          id="userPw"
          type="password"
          placeholder="🔒 비밀번호를 입력해주세요"
        />
        <LoginBtn type="submit">로그인</LoginBtn>
        <NavLink to={path}>
          <SignupBtn>회원가입</SignupBtn>
        </NavLink>
        {/* Other buttons like KakaoLogin and NaverLogin */}
      </form>
    </>
  )
}

export const LoginContent = () => {
  return (
    <LoginWrapper>
      <LoginCover>
        <LoginWrap>
          <LoginHeader>
            <NavLink>
              <LoginLogo>SignIn</LoginLogo>
            </NavLink>
          </LoginHeader>
          <LoginBody>
            <LoginForm />
            <NavLink>
              <KakaoLogin type="submit">
                <img
                  className="kakaologin"
                  src="img/kakao.png"
                  alt="kakaolog"
                />
                <KakaoLogo>카카오 로그인</KakaoLogo>
              </KakaoLogin>
            </NavLink>
            <NavLink>
              <NaverLogin type="submit">
                <img
                  className="naverlogin"
                  src="img/naverlogo.png"
                  alt="naverlog"
                />
                <NaverLogo>네이버 로그인</NaverLogo>
              </NaverLogin>
            </NavLink>
          </LoginBody>
        </LoginWrap>
      </LoginCover>
    </LoginWrapper>
  )
}
