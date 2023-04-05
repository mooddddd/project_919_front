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
} from '../styled'
import { Button } from '../../common/Button'
import { useInput } from '../../hooks'
import { request } from '../../utils/axios'
import { useState } from 'react'

const domain = process.env.REACT_APP_AXIOS_DOMAIN

export const CertificationContent = ({ setAuth, auth, phone }) => {
  const certificationNum = useInput('') // certificationNum.value -> 인증번호 자체
  const [requestId, setRequestId] = useState('') // 리퀘스트아이디
  const [nextBtn, setNextBtn] = useState(false)

  const nextHanlder = (e) => {
    if (phone.value === '') {
      alert('휴대폰 인증을 완료해주세요')
      return
    } else {
      setAuth(!auth)
    }
  }

  const certificationHandler = async (e) => {
    e.preventDefault()
    if (phone.value === '') {
      alert('전화번호를 입력해주세요')
      return
    } else {
      alert('문자 전송 완료!')
      const { data } = await request.post(`${domain}/api/sendsms`, {
        phone: phone.value,
      })
      setRequestId(data.requestId)
    }
  }

  const numberCheckHandler = async (e) => {
    e.preventDefault()
    if (phone.value === '') {
      alert('전화번호를 입력해주세요')
      return
    }
    const { data } = await request.post('api/verifycode', {
      requestId,
      userInputCode: certificationNum.value,
    })
    if (data.response) {
      setNextBtn(true)
    } else if (!data.response) {
      alert('인증번호가 일치하지 않습니다')
      return
    }
  }

  return (
    <>
      <CertifyWrapper>
        <CertifyWrap>
          <CertifyLogo>Certification</CertifyLogo>
          <CertifyBody>
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
            {nextBtn ? (
              <Btn onClick={nextHanlder}>
                <BtnLogo>가입 진행하기</BtnLogo>
              </Btn>
            ) : (
              <>
                <br />
                <span>인증을 진행해주세요</span>
                <br />
              </>
            )}
            <Line> OR </Line>

            <KakaoLogin type="submit">
              <img className="kakaologin" src="img/kakao.png" alt="kakaolog" />
              <KakaoLogo>카카오 로그인</KakaoLogo>
            </KakaoLogin>

            <NaverLogin type="submit">
              <img
                className="naverlogin"
                src="img/naverlogo.png"
                alt="naverlog"
              />
              <NaverLogo>네이버 로그인</NaverLogo>
            </NaverLogin>
          </CertifyBody>
        </CertifyWrap>
      </CertifyWrapper>
    </>
  )
}
