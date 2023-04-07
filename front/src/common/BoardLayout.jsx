import styled from 'styled-components'
const publicPath = process.env.PUBLIC_URL

const ContentWrap = styled.div`
  width: 90%;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  min-height: 5rem;
  margin: 0 auto;
  padding: 1rem;
`

const Wrap = styled.div`
  margin: 0 auto;
  padding: 3rem;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${publicPath}/img/constella.jpg);
    opacity: 0.5;
    position: absolute;
    z-index: -1;
  }
`

export const BoardLayout = ({ children }) => {
  return (
    <Wrap>
      <ContentWrap>{children}</ContentWrap>
    </Wrap>
  )
}
