import styled from "styled-components"
import { SlideWrap, MainConTopWrapper, MainConTopWrap, SlideBtn, MainInfo, ButttonWrap, MainButton } from "../styled"

export const MainContentTop = () => {
    function goToScroll(name) {
        var location = document.querySelector("." + name).offsetTop;
        window.scrollTo({top: location, behavior: 'smooth'});
    }
    return(
        <>
            <SlideWrap>
                <SlideBtn>
                    <button onClick="goToScroll('youtube')">
                        <img className="youtubebtn" alt="" src={`${publicPath}/img/platformLogo/youtube.png`} /> 
                    </button>
                    <button onClick="goToScroll($`{name}`)" />
                    <button onClick="goToScroll($`{name}`)" />
                    <button onClick="goToScroll($`{name}`)" />
                    <button onClick="goToScroll($`{name}`)" />
                    <button onClick="goToScroll($`{name}`)" />
                </SlideBtn>
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
                    <MainButton/>
                </ButttonWrap>
            </SlideWrap>
        </>
    )
}

const publicPath = process.env.PUBLIC_URL