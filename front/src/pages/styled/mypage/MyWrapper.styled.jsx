import styled from 'styled-components'
const publicPath = process.env.PUBLIC_URL

export const MyWrapper = styled.div`
  width: 1920px;
  height: 100vh;
  background-image: url(${publicPath}/img/clouds.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before{
    content: "";
    opacity: 0.2;
  }
`
