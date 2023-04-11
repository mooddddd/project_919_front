import styled from 'styled-components'

const ButtonStyled = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  border-radius: 0.3rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ color }) => color};
  color: white;

  &:hover {
    background: #ff8f8f;
    cursor: pointer;
  }
`

const backgroundColor = {
  red: '#ff5858',
  gray: '#6D6D6D',
  moreGray: '#A1A1A1',
  transparency: '#ffffff0',
  darkBlue: '#172950af',
}

export const Button = ({ children, width, height, type, onClick, color }) => {
  return (
    <ButtonStyled
      width={width}
      height={height}
      type={type}
      onClick={onClick}
      color={backgroundColor[color]}
    >
      {children}
    </ButtonStyled>
  )
}
