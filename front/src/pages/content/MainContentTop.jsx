import { SlideWrap, MainConTopWrapper, MainConTopWrap, MainInfoWrap, MainInfo, ButttonWrap, MainButton } from "../styled"

export const MainContentTop = () => {
    return(
        <>
            <SlideWrap>
                <MainConTopWrapper>
                    <MainConTopWrap>
                        <div className="image" />
                        <div className="image" />
                        <div className="image" />
                        <div className="image" />
                        <div className="image" />
                        <div className="image" />
                        <div className="image" />
                        <div className="image" />
                        <div className="image" />
                    </MainConTopWrap>
                </MainConTopWrapper>
                <ButttonWrap>
                    <MainInfoWrap>
                        919
                    </MainInfoWrap>
                    <MainInfo>에서 다양한 구독 서비스를 이용해보세요</MainInfo>
                    <MainButton/>
                </ButttonWrap>
            </SlideWrap>
        </>
    )
}

