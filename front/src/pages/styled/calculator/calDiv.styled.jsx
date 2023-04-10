import styled from 'styled-components'

export const CalDiv = styled.div`
  width: ${({ width }) => width};
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction};
  /* justify-content: space-between; */
`
