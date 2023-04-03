import { NavLink } from "react-router-dom"
import { LoginCover, LoginWrapper, LoginWrap, LoginHeader, LoginLogo, LoginBody, InputBox, LoginBtn, LoginBtnLogo, Infobox, LogInformation, KakaoLogin, NaverLogin, KakaoLogo, NaverLogo } from "../styled"
import axios from "axios"

export const LoginContent = () => {
    const submithandler = async(e) => {
        e.preventDefault()
        const usersid = e.target.userid.value
        const userspw = e.target.userpw.value
        const response = await axios.post("http://localhost:3005/", { usersid, userspw })
    }
    const path = "/signup"
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
                                <form onSubmit={submithandler} action="http://localhost:3005/" method="post">
                                    <InputBox name="userid" id="userid" type="text" placeholder="👤 아이디를 입력해주세요" />
                                    <InputBox name="userpw" id="userpw" type="text" placeholder="🔒 비밀번호를 입력해주세요" />
                                    <LoginBtn type="submit"> 
                                        <LoginBtnLogo>
                                            로그인    
                                        </LoginBtnLogo>
                                    </LoginBtn>
                                </form>
                                    <Infobox>
                                        <LogInformation> 
                                            <NavLink to={path}>
                                                회원가입    
                                            </NavLink>
                                        </LogInformation>
                                        <LogInformation> 아이디/비밀번호 찾기 </LogInformation>
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
