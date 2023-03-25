import { NavLink } from "react-router-dom"
import { LoginWrapper, LoginWrap, LoginHeader, LoginLogo, LoginBody, InputBox, LoginBtn, LoginBtnLogo, Loginfo, KakaoLogin, NaverLogin, KakaoLogo, NaverLogo } from "../styled"

export const LoginContent = () => {
    return(
        <> 
            <LoginWrapper>
                <LoginWrap>
                    <LoginHeader>
                            <NavLink>
                                <LoginLogo>회원가입</LoginLogo>
                            </NavLink>
                    </LoginHeader>
                    <LoginBody>
                            <InputBox name="userid" id="userid" type="text" placeholder="👤 아이디를 입력해주세요" />
                            <InputBox name="userpw" id="userpw" type="text" placeholder="🔒 비밀번호를 입력해주세요" />
                            <InputBox name="userpw" id="userpw" type="text" placeholder="🔒 비밀번호를 다시한번 입력해주세요" />
                            <LoginBtn type="submit"> 
                                <LoginBtnLogo>
                                    가입하기    
                                </LoginBtnLogo>
                            </LoginBtn>
                            <Loginfo> OR </Loginfo>
                            <KakaoLogin type="submit"> 
                                <img class="kakaologin" src="img/kakao.png" alt="kakaolog"/>
                                <KakaoLogo>
                                    카카오 로그인    
                                </KakaoLogo> 
                            </KakaoLogin>
                            <NaverLogin type="submit"> 
                                <img class="naverlogin" src="img/naverlogo.png" alt="naverlog"/>
                                <NaverLogo>
                                    네이버 로그인 
                                </NaverLogo>
                            </NaverLogin>
                    </LoginBody>
                </LoginWrap>
            </LoginWrapper>
        </>
    )
}
     