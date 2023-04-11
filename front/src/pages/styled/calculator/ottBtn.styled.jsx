import styled from 'styled-components'

export const OttBtn = styled.button`
  display: block;
  border: none;
  border-radius: 1rem;
  margin-bottom: 3rem;
  margin-right: 2rem;

  & > img {
    width: 6rem;
    padding: 0.5rem;
    opacity: 1;
    transition: 0.5s;
  }
  &:hover img {
    opacity: 0.5;
  }

  &:active {
    background: #a9a9a9;
  }
`
