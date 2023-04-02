import { NavLink } from "react-router-dom";
import {
  JoinWrapper,
  JoinWrap,
  JoinHeader,
  JoinLogo,
  JoinProfile,
  ProfileBtn,
  JoinBody,
  InputBox,
  Btn,
  BtnLogo,
  Line,
  KakaoLogin,
  NaverLogin,
  KakaoLogo,
  NaverLogo,
} from "../styled";
import { useState } from "react";
import { Button } from "../../common/Button";
import { CertificationContent } from "./CertificationContent";

export const SignUpContent = () => {
  const [img, setImg] = useState("");
  const [userId, setuserId] = useState("");
  const [userIdDoubleCheck, setuserIdDoubleCheck] = useState(false);
  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState(null);

  const [auth, setAuth] = useState(true);
  const [phone, setPhone] = useState("");

  const onUserIdHandler = (e) => {
    setuserId(e.target.value);
  };
  const onNicknameHandler = (e) => {
    setNickname(e.target.value);
  };
  const onPwHandler = (e) => {
    setPw(e.target.value);
  };
  const onConfirmPwHandler = (e) => {
    setConfirmPw(e.target.value);
  };

  const changeImgHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  const clickEvent = (e) => {
    e.preventDefault();
    console.log(img, userId, nickname, pw, phone);
    if (pw != confirmPw) {
      alert("비밀번호를 확인해주세요");
    } else if (!userIdDoubleCheck) {
      alert("이메일 중복체크를 진행해주세요");
    }
  };

  const test = true; // 여기에 엑시오스로 있냐 없냐 확인한 다음 false면 중복, ture면 사용 가능
  const userIdCheck = (e) => {
    e.preventDefault();
    if (userId === "") {
      alert("이메일을 입력해주세요");
    } else if (!test) {
      alert("중복된 이메일입니다ㅠ");
    } else {
      alert("사용 가능한 이메일입니다~");
      setuserIdDoubleCheck(true);
    }
  };

  const path = "/signup/certification";

  return (
    <>
      {auth ? (
        <CertificationContent
          auth={auth}
          setAuth={setAuth}
          phone={phone}
          setPhone={setPhone}
        />
      ) : (
        <JoinWrapper>
          <JoinWrap>
            <JoinHeader>
              <NavLink to="/signup">
                <JoinLogo>SignUp</JoinLogo>
              </NavLink>
            </JoinHeader>
            <JoinBody>
              <form>
                {/* 폼태그 묶여 있는 정보들 로컬스토리지에 저장시키기! 인증까지 받고, 그 정보 합쳐서 백으로 */}
                <input type="hidden" name="phone" value={phone} />
                <JoinProfile>
                  <img
                    src={img ? img : "/img/profile.png"}
                    className="profileIcon"
                    alt="profileIcon"
                  />
                  프로필 사진 변경
                  <input
                    type="file"
                    name="userPic"
                    accept="image/jpg, image/png, image/jpeg"
                    onChange={changeImgHandler}
                  />
                </JoinProfile>
                <InputBox
                  type="userId"
                  name="email"
                  id="userId"
                  placeholder="👤 이메일을 입력해주세요"
                  required
                  onChange={onUserIdHandler}
                />
                <Button
                  width="30%"
                  height="2rem"
                  onClick={userIdCheck}
                  color="darkBlue"
                >
                  이메일 중복확인
                </Button>

                <InputBox
                  name="userNick"
                  id="userNick"
                  placeholder="👾 닉네임을 입력해주세요"
                  required
                  onChange={onNicknameHandler}
                />
                <InputBox
                  name="userPw"
                  id="userPw"
                  type="password"
                  placeholder="🔒 비밀번호를 입력해주세요"
                  required
                  onChange={onPwHandler}
                />
                <InputBox
                  type="password"
                  placeholder="🔒 비밀번호를 다시 한번 입력해주세요"
                  required
                  onChange={onConfirmPwHandler}
                />

                {pw === confirmPw ? (
                  <span className="confirm">비밀번호가 일치합니다</span>
                ) : (
                  <span className="alert">비밀번호 확인이 필요합니다</span>
                )}

                <Button
                  width="100%"
                  height="3rem"
                  color="darkBlue"
                  onClick={clickEvent}
                >
                  가입 완료 하기 {/* <NavLink to={path}>가입하기</NavLink> */}
                </Button>
              </form>

              <Line> OR </Line>

              <KakaoLogin type="submit">
                <img
                  className="kakaologin"
                  src="img/kakao.png"
                  alt="kakaolog"
                />
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
            </JoinBody>
          </JoinWrap>
        </JoinWrapper>
      )}
    </>
  );
};
