import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;

  & .searchTop {
    margin: 3rem auto;
    text-align: center;
    font-size: 1.5rem;

    & > img {
      width: 1.2rem;
    }

    & > span {
      font-weight: bold;
      color: #ff5858;
    }
  }

  & .searchBottom {
    margin-bottom: 3rem;
    & > div {
      text-align: center;
      padding: 5rem 0;
    }
    & > table {
      margin: 1rem auto;
    }
  }
`
