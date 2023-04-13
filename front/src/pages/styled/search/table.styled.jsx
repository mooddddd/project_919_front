import styled from 'styled-components'

export const TableStyled = styled.table`
  width: 90%;
  border-collapse: collapse;
`

export const TrStyled = styled.tr`
  & > th {
    padding-bottom: 1rem;
    border-bottom: 2px dashed #d8d8d8;
  }

  & > td {
    height: 1.5rem;
    padding: 1rem 1.5rem;

    & > p {
      text-align: center;
    }
  }

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

  & .none {
    text-align: center;
  }
`
