import styled from 'styled-components'
const publicPath = process.env.PUBLIC_URL

export const CalWrapper = styled.div`
  background-image: url(${publicPath}/img/pinkcloud.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.85;

  & .content {
    margin: 0 auto;
    width: 80%;
    background: rgba(255, 255, 255, 0.3);

    & .sort {
      width: 90%;
      margin: 0 auto;
      padding: 3rem 0;
    }
  }
`

/* display: flex; */
/* flex-direction: row; */
/* align-items: center; */
