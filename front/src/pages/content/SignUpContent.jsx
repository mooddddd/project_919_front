import { NavLink } from "react-router-dom"
import { JoinWrapper, JoinWrap, JoinHeader, JoinLogo, JoinProfile, ProfileBtn, JoinBody, InputBox, Btn, BtnLogo, Line, KakaoLogin, NaverLogin, KakaoLogo, NaverLogo } from "../styled"

export const SignUpContent = () => {
    const path = "/signup/certification"
    return(
        <> 
            <JoinWrapper>
                <JoinWrap>
                    <JoinHeader>
                            <NavLink to="/signup">
                                <JoinLogo>SignUp</JoinLogo>
                            </NavLink>
                    </JoinHeader>
                    <JoinBody>
                            <JoinProfile>
                                <img class="profileIcon" src="img/profile.png" alt="profileicon" />
                                <ProfileBtn> 프로필 변경 </ProfileBtn>
                            </JoinProfile>
                            <InputBox name="userid" id="userid" type="text" placeholder="👤 아이디를 입력해주세요" />
                            <InputBox name="usernickname" id="usernickname" type="text" placeholder= "👾 닉네임을 입력해주세요" />
                            <InputBox name="userpw" id="userpw" type="text" placeholder="🔒 비밀번호를 입력해주세요" />
                            <InputBox name="userpw" id="userpw" type="text" placeholder="🔒 비밀번호를 다시한번 입력해주세요" />
                            <Btn type="submit"> 
                                <BtnLogo>
                                    <NavLink to={path}>
                                        가입하기    
                                    </NavLink>
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