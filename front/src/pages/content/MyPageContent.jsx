import { MyPageWrapper, FullWrap, MyPageHeaderWrap, MyPageLogo, MyPageBodyWrapper, MyPageBodyWrap, OttWrap, PriceWrapper, PriceWrap} from "../styled"

export const MyPageContent = () => {
    return(
        <>
            <MyPageWrapper>
                <FullWrap>
                    <MyPageHeaderWrap>
                        <MyPageLogo>
                            나의 참여현황
                        </MyPageLogo>
                    </MyPageHeaderWrap>
                    <MyPageBodyWrapper>
                        <OttWrap>
                            mypick
                            <img class="mypick" src="img/wave.jpg" alt="mypick" />
                        </OttWrap>
                        <PriceWrapper>
                            <PriceWrap>
                                분배예상액
                            </PriceWrap>
                        </PriceWrapper>
                        <MyPageBodyWrap>
                            분배예상액
                        </MyPageBodyWrap>
                    </MyPageBodyWrapper>
                </FullWrap>
            </MyPageWrapper>
        </>
    )
}