import styled, { css } from 'styled-components'

const width = css`
  & > .platform {
    width: 15%;
  }
  & > .title {
    width: 55%;
  }
  & > .writer {
    width: 15%;
  }
  & > .date {
    width: 15%;
  }
`

export const TableStyled = styled.table`
  width: 90%;
  border-collapse: collapse;
`

export const TitelTrStyled = styled.tr`
  & > th {
    padding-bottom: 1rem;
    border-bottom: 2px dashed #d8d8d8;
  }
  ${width}
`

export const TrStyled = styled.tr`
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  & > td {
    height: 1.5rem;
    padding: 1.5rem 1.5rem;

    & > p {
      text-align: center;
    }
  }

  ${width}
`
