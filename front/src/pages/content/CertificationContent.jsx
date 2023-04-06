import {
  CertifyWrapper,
  CertifyWrap,
  CertifyLogo,
  CertifyBody,
  InputBox,
  Btn,
  BtnLogo,
  Line,
  KakaoLogin,
  NaverLogin,
  KakaoLogo,
  NaverLogo,
  Alert,
} from '../styled'
import { Button } from '../../common/Button'
import { useInput } from '../../hooks'
import { request } from '../../utils/axios'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const domain = process.env.REACT_APP_AXIOS_DOMAIN
const kakaoAuth = `${domain}auth/kakao`
const naverAuth = `${domain}auth/naver/callback`

export const CertificationContent = ({ setAuth, auth, phone }) => {
  const certificationNum = useInput('') // certificationNum.value -> 인증번호 자체
  const [requestId, setRequestId] = useState('') // 리퀘스트아이디
  const [nextBtn, setNextBtn] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertStatus, setAlertStatus] = useState('')
  const [step, setStep] = useState(1)

  const nextHanlder = (e) => {
    if (phone.value === '') {
      setAlertMessage('휴대폰 인증을 완료해주세요.')
      setAlertStatus('error')
      return
    } else {
      setAuth(!auth)
    }
  }

  const certificationHandler = async (e) => {
    e.preventDefault()
    const phoneRegex = /^\d{11}$/
    if (phone.value === '') {
      setAlertMessage('전화번호를 입력해주세요')
      setAlertStatus('error')
      return
    } else if (!phoneRegex.test(phone.value)) {
      setAlertMessage('휴대폰 번호를 정확히 입력해주세요')
      setAlertStatus('error')
    } else {
      setAlertMessage('수신된 인증번호로 인증해주세요!')
      setAlertStatus('success')
      setStep(2)
      const { data } = await request.post(`${domain}api/sendsms`, {
        phone: phone.value,
      })
      setRequestId(data.requestId)
    }
  }

  const numberCheckHandler = async (e) => {
    e.preventDefault()
    if (phone.value === '') {
      setAlertMessage('전화번호를 입력해주세요')
      setAlertStatus('error')
      return
    }
    const { data } = await request.post(`${domain}api/verifycode`, {
      requestId,
      userInputCode: certificationNum.value,
    })
    if (data.response) {
      setNextBtn(true)
      setAlertMessage('인증에 성공했습니다')
      setAlertStatus('success')
      setStep(3)
    } else if (!data.response) {
      setAlertMessage('인증번호가 일치하지 않습니다')
      setAlertStatus('error')
      return
    }
  }

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
      <CertifyWrapper>
        <CertifyWrap>
          <CertifyLogo>Certification</CertifyLogo>
          <CertifyBody>
            {step === 1 && (
              <form>
                <InputBox
                  name="phone"
                  id="phone"
                  type="tel"
                  placeholder=" 📞 전화번호를 입력해주세요"
                  required
                  {...phone}
                />
                <Button
                  width="30%"
                  height="2rem"
                  color="darkBlue"
                  onClick={certificationHandler}
                >
                  인증번호 받기
                </Button>
              </form>
            )}
            {step === 2 && (
              <form>
                <input type="hidden" value={requestId} name="requestId" />
                <InputBox
                  name="userInputCode"
                  id="userInputCode"
                  type="text"
                  placeholder="인증번호를 입력해주세요"
                  required
                  {...certificationNum}
                />
                <Button
                  width="30%"
                  height="2rem"
                  color="darkBlue"
                  onClick={numberCheckHandler}
                >
                  인증번호 확인
                </Button>
              </form>
            )}
            {step === 3 && (
              <>
                {nextBtn ? (
                  <Btn onClick={nextHanlder}>
                    <BtnLogo>가입 진행하기</BtnLogo>
                  </Btn>
                ) : (
                  <>
                    <br />
                  </>
                )}
                <Line> OR </Line>
              </>
            )}
            <NavLink to={kakaoAuth}>
              <KakaoLogin type="submit">
                <img
                  className="kakaologin"
                  src="img/kakao.png"
                  alt="kakaolog"
                />
                <KakaoLogo>카카오 시작하기</KakaoLogo>
              </KakaoLogin>
            </NavLink>
            <NavLink to={naverAuth}>
              <NaverLogin type="submit">
                <img
                  className="naverlogin"
                  src="img/naverlogo.png"
                  alt="naverlog"
                />
                <NaverLogo>네이버 시작하기</NaverLogo>
              </NaverLogin>
            </NavLink>
          </CertifyBody>
        </CertifyWrap>
      </CertifyWrapper>
    </>
  )
}
