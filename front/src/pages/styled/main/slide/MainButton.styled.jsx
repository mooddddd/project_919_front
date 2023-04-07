import styled from 'styled-components'
const publicPath = process.env.PUBLIC_URL

export const MainButton = styled.div`
  background-image: url(${publicPath}/img/mainbtn.png);
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  margin-top: 350px;
`