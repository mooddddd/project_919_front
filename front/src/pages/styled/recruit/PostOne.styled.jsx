import styled from "styled-components";

export const PostOneStyled = styled.div`
  width: 17rem;
  height: 13rem;
  /* border: 1px solid #000; */
  border-radius: 0.5rem;
  margin: 2rem 1.5rem;
  /* display: flex;
    flex-direction: column; */

  &:hover {
    background: white;
    opacity: 0.7;
  }

  & a {
    color: black;
  }

  div {
    margin-bottom: 0.2rem;
  }

  .star {
    float: right;
    padding-right: 0.5rem;
  }

  .logoImg {
    text-align: center;
    margin: 1.3rem 1rem;
    height: 4rem;
  }

  .content {
    width: 88%;
    margin: 0 auto;
  }

  .limitNprice {
    display: flex;
    justify-content: space-between;
  }

  .limit {
    font-weight: bold;
    color: #ff5c00;
    font-size: 1.3rem;
  }
  .ing {
    font-weight: bold;
    color: #ff5c00;
    font-size: 1.3rem;
  }

  .price {
    font-weight: bold;
    color: #ff5c00;
    font-size: 1.3rem;
  }

  .subject {
  }

  .nickname {
    font-size: 0.8rem;
    color: #646464;
  }
`;
