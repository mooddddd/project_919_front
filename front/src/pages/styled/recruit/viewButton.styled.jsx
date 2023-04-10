import styled from 'styled-components'
export const ViewButtonStyled = styled.button`
  width: 100%;
  height: 100%;
  font-family: 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  background-color: #007aff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #005fe3;
  }
  &:active {
    background-color: #004ecb;
  }
`
