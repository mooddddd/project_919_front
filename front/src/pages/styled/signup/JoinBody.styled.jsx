import styled from "styled-components";

export const JoinBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > form > .alert {
    color: red;
    margin: 1rem 0;
  }

  & > form > .confirm {
    color: green;
    margin: 1rem 0;
  }
`;
