import styled, { keyframes } from 'styled-components'

export const alertAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Alert = styled.div`
  background-color: #f44336;
  color: white;
  padding: 16px;
  border-radius: 4px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  animation: ${alertAnimation} 1s;
  display: inline-block;
  max-width: 80%; // 배경의 최대 너비를 설정합니다.

  &.alert--show {
    animation-name: ${alertAnimation};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
`
