import { NavLink } from "react-router-dom";
import {
  JoinWrapper,
  JoinWrap,
  JoinHeader,
  JoinLogo,
  JoinProfile,
  JoinBody,
  InputBox,
  Line,
  KakaoLogin,
  NaverLogin,
  KakaoLogo,
  NaverLogo,
} from "../styled";
import { useState } from "react";
import { Button } from "../../common/Button";
import { CertificationContent } from "./CertificationContent";
import { request, requestMulter } from "../../utils/request";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";

export const SignUpContent = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState("");

  const userId = useInput("");
  const nickName = useInput("");
  const pw = useInput("");
  const phone = useInput("");

  const [userIdDoubleCheck, setuserIdDoubleCheck] = useState(false);
  const [confirmPw, setConfirmPw] = useState(null);
  const [auth, setAuth] = useState(true);

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

  const submitHandler = async (e) => {
    e.preventDefault();
    if (pw.value !== confirmPw) {
      alert("비밀번호를 확인해주세요");
      return;
    } else if (!userIdDoubleCheck) {
      alert("이메일 중복체크를 진행해주세요");
      return;
    } else {
      let body = new FormData(e.target);
      await requestMulter.post("user/useradd", body);
      alert("가입 오나료! 메인으로 이동합니다. 로그인을 해주세요.");
      navigate("/");
    }
  };

  const userIdCheck = async (e) => {
    e.preventDefault();
    const result = await request.post("user/checkuserId", { userId });
    const check = result.data.isAvailable;

    if (userId.value === "") {
      alert("이메일을 입력해주세요");
      return;
    } else if (!check) {
      alert("중복된 이메일입니다ㅠ");
      return;
    } else {
      alert("사용 가능한 이메일입니다~");
      setuserIdDoubleCheck(true);
    }
  };

  return (
    <>
      {auth ? (
        <CertificationContent auth={auth} setAuth={setAuth} phone={phone} />
      ) : (
        <JoinWrapper>
          <JoinWrap>
            <JoinHeader>
              <NavLink to="/signup">
                <JoinLogo>SignUp</JoinLogo>
              </NavLink>
            </JoinHeader>
            <JoinBody>
              <form onSubmit={submitHandler} encType="multipart/form-data">
                <input type="hidden" name="phone" value={phone.value} />
                <JoinProfile>
                  <img
                    src={img ? img : "/img/profile.png"}
                    className="profileIcon"
                    alt="profileIcon"
                  />
                  프로필 사진 변경
                  <input
                    type="file"
                    name="picture"
                    accept="image/jpg, image/png, image/jpeg"
                    onChange={changeImgHandler}
                    multiple
                  />
                </JoinProfile>
                <InputBox
                  type="userId"
                  name="userId"
                  id="userId"
                  placeholder="👤 이메일을 입력해주세요"
                  required
                  {...userId}
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
                  {...nickName}
                />
                <InputBox
                  name="userPw"
                  id="userPw"
                  type="password"
                  placeholder="🔒 비밀번호를 입력해주세요"
                  required
                  {...pw}
                />
                <InputBox
                  type="password"
                  placeholder="🔒 비밀번호를 다시 한번 입력해주세요"
                  required
                  onChange={onConfirmPwHandler}
                />

                {pw.value === confirmPw ? (
                  <span className="confirm">비밀번호가 일치합니다</span>
                ) : (
                  <span className="alert">비밀번호 확인이 필요합니다</span>
                )}

                <Button
                  width="100%"
                  height="3rem"
                  color="darkBlue"
                  type="submit"
                >
                  가입 완료 하기
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
