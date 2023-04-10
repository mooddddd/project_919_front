import { SlideWrap, MainConTopWrapper, MainConTopWrap,MainInfo, ButttonWrap, MainButton } from "../styled"

// const $bottomBtn = document.querySelector(".moveBtm");
// $bottomBtn.onclick = () => {
// window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
// };

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
                    <MainInfo>919에서 다양한 구독 서비스를 이용해보세요</MainInfo>
                    <MainButton className="moveBtm" />
                </ButttonWrap>
            </SlideWrap>
        </>
    )
}
