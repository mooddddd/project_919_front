import { MyWrapper, MyBackground, MyHeaderWrapper, MyHeaderWrap, MyHeaderLogo, MyBodyWrapper, MyBodyWrap, MyWrap, IconWrapper, ImgWrap, InfoWrap} from "../styled"

export const MyPageContent = () => {
    return(
        <>
            <MyWrapper>
                <MyBackground>
                    <MyHeaderWrapper>
                        <MyHeaderWrap>
                            <MyHeaderLogo>
                                My Participation Status
                            </MyHeaderLogo>
                        </MyHeaderWrap>
                    </MyHeaderWrapper>
                    <MyBodyWrapper>
                        <MyBodyWrap>
                            Mypick
                            <img class="mypicks" src="img/wave.jpg" alt="mypicks" />
                        </MyBodyWrap>
                        <MyBodyWrap>
                            분배예상액
                            <MyWrap>
                                3,600원
                            </MyWrap>        
                        </MyBodyWrap>
                        <MyBodyWrap>
                            참여일
                            <MyWrap>
                                23.03.27 ~ 
                            </MyWrap>
                        </MyBodyWrap>
                        <MyBodyWrap>
                            참가인원
                                <IconWrapper>
                                    <ImgWrap>
                                        <img class="cat" src="img/cat.jpeg" alt="cat" />
                                        <InfoWrap>
                                            niyaong3e
                                        </InfoWrap>
                                    </ImgWrap>
                                    <ImgWrap>
                                        <img class="totoro" src="img/totoro.jpeg" alt="totoro" />
                                        <InfoWrap>
                                            totorojk30
                                        </InfoWrap>
                                    </ImgWrap>
                                    <ImgWrap>
                                        <img class="kiki" src="img/kiki.jpeg" alt="kiki" />
                                        <InfoWrap>
                                            kiki4860e
                                        </InfoWrap>
                                    </ImgWrap>
                                </IconWrapper>
                        </MyBodyWrap>
                    </MyBodyWrapper>
                </MyBackground>
            </MyWrapper>
        </>
    )
}