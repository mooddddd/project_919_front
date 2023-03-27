import { NavLink } from "react-router-dom"
import { LoginCover, LoginWrapper, LoginWrap, LoginHeader, LoginLogo, LoginBody, InputBox, LoginBtn, LoginBtnLogo, Infobox, LogInfo, KakaoLogin, NaverLogin, KakaoLogo, NaverLogo } from "../styled"

export const LoginContent = () => {
    return(
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
                                    <InputBox name="userid" id="userid" type="text" placeholder="👤 아이디를 입력해주세요" />
                                    <InputBox name="userpw" id="userpw" type="text" placeholder="🔒 비밀번호를 입력해주세요" />
                                    <LoginBtn type="submit"> 
                                        <LoginBtnLogo>
                                            로그인    
                                        </LoginBtnLogo>
                                    </LoginBtn>
                                    <Infobox>
                                        <LogInfo> 회원가입 </LogInfo>
                                        <LogInfo> 아이디/비밀번호 찾기 </LogInfo>
                                    </Infobox>
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
                    </LoginCover>
                </LoginWrapper>
        </>
    )
}