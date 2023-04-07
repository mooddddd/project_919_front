import styled from 'styled-components'
const publicPath = process.env.PUBLIC_URL

export const MyWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  background-image: url(${publicPath}/img/mainWP.png);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.9;
`
