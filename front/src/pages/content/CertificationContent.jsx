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
import { useInput } from "../../hooks";

export const CertificationContent = ({ setAuth, auth, phone }) => {
  const certificationNum = useInput("");

  const nextHanlder = (e) => {
    if (phone.value === "") {
      alert("휴대폰 인증을 완료해주세요");
      // 이 부분 인증번호 확인하는 코드로 변경해야 함!!
    } else {
      setAuth(!auth);
    }
  };

  const certificationHandler = (e) => {
    e.preventDefault();
    console.log(`인증번호 버튼 클릭!`);
    // api로 받은 핸드폰 번호 보내면 인증번호 감, 그리고 리퀘스트 아이디라는 변수로 온 값을 인풋-히든으로 갖고 있어야 함 -> api/sendsms
  };

  const numberCheckHandler = (e) => {
    e.preventDefault();
    console.log(`인증번호 확인 버튼 클릭!!!`);
    // 리퀘스트 아이디+사용자한테서 받은 인증번호를 합쳐서 다시 날림, 그러면 true, 메세지가 응답으로 오게 됨 -> api/verified?
  };

  const path = "/login";
  return (
    <>
      <CertifyWrapper>
        <CertifyWrap>
          {/* <CertifyHeader></CertifyHeader> */}
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
              <input type="hidden" {...certificationNum} />
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
            </form>
            {/* 얘가 트루값으로 오면 진행, 아니면 alert창 뜨게 */}
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
