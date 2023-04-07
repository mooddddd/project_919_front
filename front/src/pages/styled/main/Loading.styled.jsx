import styled, { keyframes } from 'styled-components'
import { useAuth } from '../../../hooks/AuthProvider'
const publicPath = process.env.PUBLIC_URL

export const LoadingAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const StyledLoading = styled.div`
  background-image: url(${publicPath}/img/Loading.gif);
  background-position: center;
  background-repeat: no-repeat;
  padding: 16px;
  border-radius: 4px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  animation: ${LoadingAnimation} 1s;
  display: inline-block;
  max-width: 80%;

  &.alert--show {
    animation-name: ${LoadingAnimation};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
`

export const Loading = () => {
  const { isLoading } = useAuth()
  return isLoading ? <StyledLoading /> : null
}
