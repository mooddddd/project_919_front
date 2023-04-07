import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    background-size: cover;
    position: relative;
    background-color: transparent;
    &::before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0,0,0,0.3);
        /* background-color: transparent; */
        display: block;
    }
`