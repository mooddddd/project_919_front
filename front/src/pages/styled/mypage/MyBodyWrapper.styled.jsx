import styled from 'styled-components'

export const MyBodyWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin: 0 auto;
  /* background-color: rgba(48, 103, 159, 0.3); */
  /* padding-bottom: 20px;
  padding-top: 20px; */
  /* &:hover {
    padding-top: 20px;
  } */

  & .nav {
    margin: 0 auto;
    width: 35%;

    & ul {
      display: flex;
      justify-content: space-between;

      & li:hover {
        cursor: pointer;
        color: #ff5858;
      }
    }
  }
`
