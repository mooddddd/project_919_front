import { NavLink } from "react-router-dom"
import { JoinWrapper, JoinHeader, JoinLogo, JoinBody, InputBox, Btn } from "../styled"

export const SignUpContent = () => {
    return(
        <>        
            <JoinWrapper>
                <img class="joinWallpaper" src="img/3.png" alt="joinWP" />
                <JoinHeader>
                        <NavLink>
                            <JoinLogo>회원가입</JoinLogo>
                        </NavLink>
                </JoinHeader>
                <JoinBody>
                        <InputBox name="userid" id="userid" type="text" placeholder="👤 아이디를 입력해주세요" />
                        <InputBox name="userpw" id="userpw" type="text" placeholder="🔒 비밀번호를 입력해주세요" />
                        <Btn type="submit"> SignUp </Btn>
                </JoinBody>
            </JoinWrapper>
        </>
    )
}