import styled from 'styled-components'

export const PlatformImgStyled = styled.img`
  margin: 0 auto;
  /* width: 156px; */
  width: ${({ width }) => width};
  /* height: ${({ height }) => height}; */
  object-fit: scale-down;
`
