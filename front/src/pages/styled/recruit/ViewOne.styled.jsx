import styled from "styled-components";

export const ViewOneStyled = styled.div`
  margin-bottom: 2rem;
  min-height: 30rem;

  & button > a {
    color: white;
  }

  .firstDiv {
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;

    & > img {
      margin: 0 !important;
    }
    & .planNmemver {
      margin: 0.5rem 0;
      padding-left: 3rem;
      display: flex;
      & > .plan {
        padding-right: 2rem;
      }
    }
  }

  .lastDiv {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    & > .left {
      width: 60%;
      & > div {
        margin: 1rem 0;
      }

      & > .content {
        width: 90%;
        min-height: 10rem;
        border: none;
        border-radius: 0.5rem;
        background: #ffffff8e;
        padding: 0.8rem;
        margin-bottom: 3rem;
      }
    }

    & > .right {
      width: 40%;
      margin: auto;
      text-align: center;

      & > button {
        margin-top: 1.5rem;
      }
    }
  }
`;

const TextSmallStyled = styled.span`
  font-size: 0.9rem;
  color: ${({ color }) => color};
`;

const TextNormalStyled = styled.span`
  font-size: 1.3rem;
  color: ${({ color }) => color};
`;

const TextBigStyled = styled.span`
  font-size: 1.8rem;
  font-weight: ${({ bold }) => bold};
  color: ${({ color }) => color};
`;

const colorChip = {
  red: "#ff5858",
  gray: "#6D6D6D",
  lightGray: "#A1A1A1",
};

export const TextBig = ({ color, children, bold }) => {
  return (
    <TextBigStyled color={colorChip[color]} bold={bold}>
      {children}
    </TextBigStyled>
  );
};

export const TextNormal = ({ color, children }) => {
  return (
    <TextNormalStyled color={colorChip[color]}>{children}</TextNormalStyled>
  );
};

export const TextSmall = ({ children, color }) => {
  return <TextSmallStyled color={colorChip[color]}>{children}</TextSmallStyled>;
};
