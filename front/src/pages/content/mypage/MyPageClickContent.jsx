import {
  MyWrapper,
  MyBackground,
  MyHeaderWrap,
  MyHeaderLogo,
  MyBodyWrapper,
  MyBodyWrap,
  MyWrap,
  IconWrapper,
  ImgWrap,
  InfoWrap,
} from '../../styled'

export const MyPageClickContent = () => {
  return (
    <>
      <MyWrapper>
        <MyBackground width="800px">
          <MyHeaderWrap>
            <MyHeaderLogo>My Participation Status</MyHeaderLogo>
          </MyHeaderWrap>

          <MyBodyWrapper>
            <MyBodyWrap>
              <span>Mypick</span>
              <br />
              <img
                className="mypicks"
                src="/img/platformLogo/wavve.png"
                alt="mypicks"
              />{' '}
              <span>선택한 요금제</span>
            </MyBodyWrap>
            <MyBodyWrap>
              <span>분배예상액</span>
              <MyWrap>3,600원</MyWrap>
            </MyBodyWrap>
            <MyBodyWrap>
              <span>참여일</span>
              <MyWrap>23.03.27 ~</MyWrap>
            </MyBodyWrap>
            <MyBodyWrap>
              <span>참가인원</span>
              <IconWrapper>
                <ImgWrap>
                  <img class="cat" src="img/cat.jpeg" alt="cat" />
                  <InfoWrap>niyaong3e</InfoWrap>
                </ImgWrap>
                <ImgWrap>
                  <img class="totoro" src="img/totoro.jpeg" alt="totoro" />
                  <InfoWrap>totorojk30</InfoWrap>
                </ImgWrap>
                <ImgWrap>
                  <img class="kiki" src="img/kiki.jpeg" alt="kiki" />
                  <InfoWrap>kiki4860e</InfoWrap>
                </ImgWrap>
              </IconWrapper>
            </MyBodyWrap>
          </MyBodyWrapper>
        </MyBackground>
      </MyWrapper>
    </>
  )
}
