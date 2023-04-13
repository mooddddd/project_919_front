import { SlideWrap, MainConTopWrapper, MainConTopWrap,MainInfo, ButttonWrap, MainButton } from "../styled"
import React, { useRef, useCallback, useEffect } from "react";
import { useSelector } from 'react-redux';

export const MainContentTop = () => {
    // const RefExample = () => {
    // const scrollRef = useRef();
    // const { editDone } = useSelector(state => state.board);

    // const scrollToBottom = useCallback(() => {
    // if (editDone) {
    //     scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    // }
    // }, [editDone]);

    // useEffect(() => {
    // RefExample();
    // }, [RefExample])
    // }
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