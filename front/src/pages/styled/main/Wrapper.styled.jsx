import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    position: relative;
    background-image: url("../../img/dark.jpg");
    &::before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0,0,0,0.3);
        /* z-index: -1; */
        display: block;
    }
`