import styled from 'styled-components'
const publicPath = process.env.PUBLIC_URL

export const CertifyWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-image: url(${publicPath}/img/sunset.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  align-items: center;
`
