import styled from 'styled-components'

export const PlatformBtn = styled.button`
  width: 4rem;
  height: 2rem;
  background-color: #fff;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
`
