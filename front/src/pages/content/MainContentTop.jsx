import { SlideWrap, MainConTopWrapper, MainConTopWrap, MainInfo, MainButton } from "../styled"

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
                <MainInfo>919에서 다양한 구독 서비스를 이용해보세요</MainInfo>
                <MainButton/>
            </SlideWrap>
        </>
    )
}

