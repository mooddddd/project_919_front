import { NavLink, useNavigate } from 'react-router-dom'
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
const kakaoAuth = `${domain}auth/kakao`
const naverAuth = `${domain}auth/naver/callback`

const LoginHandler = async (e, setAlertMessage, setAlertStatus, navigate) => {
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
    const response = await request.post(`${domain}user/login`, {
      userId,
      userPw,
    })
    console.log(response.data)

    if (response.data.message) {
      const { token } = response.data
      setCookie('token', token, 0.5 / 24)
      setAlertMessage('로그인에 성공했습니다. 메인 페이지로 이동합니다')
      setAlertStatus('success')
      setTimeout(() => {
        navigate('/')
      }, 1000)
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
  const navigate = useNavigate()
  return (
    <>
      {alertMessage && (
        <Alert
          onAnimationEnd={() => {
            setAlertMessage('')
            setAlertStatus('')
          }}
          style={{
            backgroundColor: alertStatus === 'success' ? '#4CAF50' : '#f44336',
          }}
        >
          {alertMessage}
        </Alert>
      )}
      <form
        onSubmit={(e) =>
          LoginHandler(e, setAlertMessage, setAlertStatus, navigate)
        }
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
              <LoginForm />
              <NavLink to={kakaoAuth}>
                <KakaoLogin type="button">
                  <img
                    className="kakaologin"
                    src="img/kakao.png"
                    alt="kakaolog"
                  />
                  <KakaoLogo>카카오 로그인</KakaoLogo>
                </KakaoLogin>
              </NavLink>
              <NavLink to={naverAuth}>
                <NaverLogin type="button">
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
    </>
  )
}
