import styled from 'styled-components'
const publicPath = process.env.PUBLIC_URL

export const NetflixWrap = styled.div`
  width: 900px;
  height: 550px;
  background-image: url(${publicPath}/img/netflixWall.png);
  background-size: cover;
  margin: 25px auto;
  background-repeat: no-repeat;
`
