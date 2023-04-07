import styled from 'styled-components'
const publicPath = process.env.PUBLIC_URL

export const Parallax = styled.div`
  background-image: url(${publicPath}/img/dark.jpg);
  min-height: 600px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: cover; */
  /* background-color: transparent; */
`
