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
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/user/user.action.controller'
import { domain } from '../../utils/axios'

const publicPath = process.env.PUBLIC_URL

export const LoginForm = () => {
  const [alertMessage, setAlertMessage] = useState('')
  const [alertStatus, setAlertStatus] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const LoginHandler = async (e) => {
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
      console.log('1234')
      await dispatch(loginUser({ userId, userPw }, 'user/login'))
      console.log('12345')
      setAlertMessage('로그인에 성공했습니다. 메인 페이지로 이동합니다')
      console.log('12346')
      setAlertStatus('success')
      console.log('12347')
      setTimeout(() => {
        console.log('1238')
        navigate('/')
        console.log('1239')
      }, 2000)
    } catch (error) {
      console.error('Login Error:', error)
      if (error.response.status === 401 || error.response.status === 500) {
        setAlertMessage('로그인 중 오류가 발생했습니다.')
        setAlertStatus('error')
      } else {
        setAlertMessage(
          '서버와의 연결이 불안정합니다. 잠시 후 다시 시도해주세요'
        )
        setAlertStatus('error')
      }
    }
  }

  const path = '/signup'
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
      <form onSubmit={LoginHandler} method="POST">
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
  const KakaoLoginHandler = async (e) => {
    e.preventDefault()
    window.location.href = `${domain}auth/kakao`
  }

  const NaverLoginHandler = async (e) => {
    e.preventDefault()
    window.location.href = `${domain}auth/naver`
  }
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
              <KakaoLogin type="button" onClick={KakaoLoginHandler}>
                <img
                  className="kakaologin"
                  src={`${publicPath}/img/kakao.png`}
                  alt="kakaolog"
                />
                <KakaoLogo>카카오 로그인</KakaoLogo>
              </KakaoLogin>
              <NaverLogin type="button" onClick={NaverLoginHandler}>
                <img
                  className="naverlogin"
                  src={`${publicPath}/img/naverlogo.png`}
                  alt="naverlog"
                />
                <NaverLogo>네이버 로그인</NaverLogo>
              </NaverLogin>
            </LoginBody>
          </LoginWrap>
        </LoginCover>
      </LoginWrapper>
    </>
  )
}
