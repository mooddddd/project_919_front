import styled, { css } from 'styled-components'

const alignCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentBottom = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Left = styled.div`
  display: flex;
  flex-direction: row;

  & .plan {
    min-width: 8rem;
    background: rgba(255, 255, 255, 0.3);
    padding: 1rem;
  }
`

export const Middle = styled.div`
  margin-top: 1rem;

  ${alignCenter}

  & > img {
    width: 10rem;
  }

  & > div {
    text-align: center;
    margin-bottom: 2rem;
  }

  & > button {
    margin-bottom: 3rem;
  }

  & .price {
    margin-top: 2rem;
  }
`

export const Right = styled.div`
  ${alignCenter}

  & .currency {
    margin: 1rem;
  }
`
