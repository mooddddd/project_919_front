import styled from "styled-components";

export const PlatformImgStyled = styled.img`
  margin: 0 auto;
  /* width: 156px; */
  width: ${({ width }) => width};
  /* height: 35px; */
  object-fit: scale-down;
`;
