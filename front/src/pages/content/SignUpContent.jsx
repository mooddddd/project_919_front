import { NavLink } from "react-router-dom"
import { JoinWrapper, JoinWrap, JoinHeader, JoinLogo, JoinBody, InputBox, Btn } from "../styled"

export const SignUpContent = () => {
    return(
        <> 
        {/* <img class="joinWallpaper" src="img/4.jpg" alt="joinWP" /> */}
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
                            <Btn type="submit"> 가입하기 </Btn>
                    </JoinBody>
                </JoinWrap>
            </JoinWrapper>
        </>
    )
}