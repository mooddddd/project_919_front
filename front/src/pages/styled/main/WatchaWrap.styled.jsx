import styled from 'styled-components'
const publicPath = process.env.PUBLIC_URL

export const WatchaWrap = styled.div`
  background-image: url(${publicPath}/img/watchaWall.png);
  width: 900px;
  height: 500px;
  background-size: cover;
  margin: 25px auto;
  background-repeat: no-repeat;
  /* background-color: black; */
`
