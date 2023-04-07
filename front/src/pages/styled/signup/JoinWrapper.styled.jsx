import styled from 'styled-components'
const publicPath = process.env.PUBLIC_URL

export const JoinWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-image: url(${publicPath}/img/train.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  align-items: center;
  /* opacity: 0.7; */
`
