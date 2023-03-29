import styled from "styled-components";

export const CategoryStyled = styled.div`
  display: flex;
  padding: 1rem;
  font-weight: bold;
  margin-bottom: 3rem;
  justify-content: space-between;

  ul {
    display: flex;
  }

  li {
    margin-left: 1rem;
  }

  a {
    color: black;

    &:active {
      color: #ff5858;
    }
  }

  & button {
    margin: 0 !important;

    & > a {
      color: white;
    }
  }
`;
