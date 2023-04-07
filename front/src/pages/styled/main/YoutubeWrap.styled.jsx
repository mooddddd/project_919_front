import styled from 'styled-components'
const publicPath = process.env.PUBLIC_URL

export const YoutubeWrap = styled.div`
  width: 900px;
  height: 550px;
  background-image: url(${publicPath}/img/youtubeWall.png);
  background-size: cover;
  margin: 25px auto;
  background-repeat: no-repeat;
`
