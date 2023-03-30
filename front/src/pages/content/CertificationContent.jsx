import { NavLink } from "react-router-dom"
import { CertifyWrapper, CertifyWrap, CertifyHeader, CertifyLogo, CertifyBody, InputBox, Btn, BtnLogo, Line, KakaoLogin, NaverLogin, KakaoLogo, NaverLogo } from "../styled"

export const CertificationContent = () => {
    const path = "/login"
    return(
        <> 
            <CertifyWrapper>
                <CertifyWrap>
                    <CertifyHeader>
                            <NavLink>
                                <CertifyLogo>Certification</CertifyLogo>
                            </NavLink>
                    </CertifyHeader>
                    <CertifyBody>
                            <InputBox name="userid" id="userid" type="text" placeholder=" 📞 전화번호를 입력해주세요" />
                            <InputBox name="usernickname" id="usernickname" type="text" placeholder= "인증번호 받기" />
                            <InputBox name="userpw" id="userpw" type="text" placeholder="인증번호를 입력해주세요" />
                            <InputBox name="userpw" id="userpw" type="text" placeholder="확인" />
                            <Btn type="submit"> 
                                <BtnLogo>
                                    <NavLink to={path}>
                                        인증하기    
                                    </NavLink>
                                </BtnLogo>
                            </Btn>
                            <Line> OR </Line>
                            <KakaoLogin type="submit"> 
                                <img class="kakaologin" src="../img/kakao.png" alt="kakaolog"/>
                                <KakaoLogo>
                                    카카오 로그인    
                                </KakaoLogo> 
                            </KakaoLogin>
                            <NaverLogin type="submit"> 
                                <img class="naverlogin" src="../img/naverlogo.png" alt="naverlog"/>
                                <NaverLogo>
                                    네이버 로그인 
                                </NaverLogo>
                            </NaverLogin>
                    </CertifyBody>
                </CertifyWrap>
            </CertifyWrapper>
        </>
    )
}