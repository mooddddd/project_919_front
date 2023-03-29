import styled from "styled-components";

export const ViewOneStyled = styled.div`
  margin-bottom: 2rem;

  & button > a {
    color: white;
  }
`;

export const textSmall = styled.div`
  font-size: 0.8rem;
  color: ${({ color }) => color};
`;

export const textBig = styled.div`
  font-size: 1.3;
  color: ${({ color }) => color};
`;
