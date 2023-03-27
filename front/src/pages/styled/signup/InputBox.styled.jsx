import styled from "styled-components"

export const InputBox = styled.input`
    width: 470px;
    height: 50px;
    display: flex;
    flex-direction: column;
    /* padding-right: 20px; */
    /* justify-content: flex-start; */
    /* align-items: flex-start; */
    box-sizing: border-box;
    margin-top: 35px;
    border: none;
    border-radius: 10px;
    text-align: left;
    padding-left: 20px;
    opacity: 0.5;
    /* background-color: transparent; */
    &::placeholder{
        color: #000000;
        font-size: 1rem;
    }
`