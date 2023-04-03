import { NavLink } from "react-router-dom";
import {
  CertifyWrapper,
  CertifyWrap,
  CertifyHeader,
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
} from "../styled";
import { Button } from "../../common/Button";

import { useSelector } from "react-redux";

export const CertificationContent = ({ setAuth, auth, setPhone, phone }) => {
  const nextHanlder = (e) => {
    if (phone === "") {
      alert("휴대폰 인증을 완료해주세요");
      // 이 부분 인증번호 확인하는 코드로 변경해야 함!!
    } else {
      setAuth(!auth);
    }
  };
  const certificationHandler = (e) => {
    e.preventDefault();
    console.log(`인증번호 버튼 클릭!`);
  };
  const numberCheckHandler = (e) => {
    e.preventDefault();
    console.log(`인증번호 확인 버튼 클릭!!!`);
  };

  const onPhoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const path = "/login";
  return (
    <>
      <CertifyWrapper>
        <CertifyWrap>
          {/* <CertifyHeader></CertifyHeader> */}
          <CertifyLogo>Certification</CertifyLogo>
          <CertifyBody>
            <InputBox
              name="phone"
              id="phone"
              type="tel"
              placeholder=" 📞 전화번호를 입력해주세요"
              onChange={onPhoneHandler}
              required
            />
            <Button
              width="30%"
              height="2rem"
              color="darkBlue"
              onClick={certificationHandler}
            >
              인증번호 받기
            </Button>
            <InputBox
              name="userpw"
              id="userpw"
              type="text"
              placeholder="인증번호를 입력해주세요"
              required
            />
            <Button
              width="30%"
              height="2rem"
              color="darkBlue"
              onClick={numberCheckHandler}
            >
              확인
            </Button>
            <Btn onClick={nextHanlder}>
              <BtnLogo>
                가입 진행하기
                {/* <NavLink to={path}></NavLink> */}
              </BtnLogo>
            </Btn>

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
  );
};
