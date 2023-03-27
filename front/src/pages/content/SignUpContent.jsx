import { NavLink } from "react-router-dom"
import { JoinWrapper, JoinWrap, JoinHeader, JoinLogo, JoinBody, InputBox, Btn, BtnLogo, Line, KakaoLogin, NaverLogin, KakaoLogo, NaverLogo } from "../styled"

export const SignUpContent = () => {
    return(
        <> 
            <JoinWrapper>
                <JoinWrap>
                    <JoinHeader>
                            <NavLink>
                                <JoinLogo>회원가입</JoinLogo>
                            </NavLink>
                    </JoinHeader>
                    <JoinBody>
                            <InputBox name="userid" id="userid" type="text" placeholder="👤 아이디를 입력해주세요" />
                            <InputBox name="userpw" id="userpw" type="text" placeholder="🔒 비밀번호를 입력해주세요" />
                            <InputBox name="userpw" id="userpw" type="text" placeholder="🔒 비밀번호를 다시한번 입력해주세요" />
                            <Btn type="submit"> 
                                <BtnLogo>
                                    가입하기    
                                </BtnLogo>
                            </Btn>
                            <Line> OR </Line>
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
                    </JoinBody>
                </JoinWrap>
            </JoinWrapper>
        </>
    )
}