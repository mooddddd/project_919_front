import { BoardLayout } from '../../../common'
import {
  Allwrap,
  PostWrapper,
  PostItem,
  PlatformImgStyled,
  PostPlatformName,
  MemberStatusStyled,
  MemberIconWarraper,
  MemberIconStyled,
  BtnWrapper,
  ViewButtonStyled,
  LikeBtnStyled,
  PostContent,
  StyledLoading,
} from '../../styled'
import { Category } from '../../content/recruitContents'
import { useEffect, useState } from 'react'
import { request, domain } from '../../../utils/axios'

const getRecruits = async (start, limit) => {
  const response = await request.get(
    `${domain}recruit/getallrecruit?start=${start}&limit=${limit}`
  )
  return response.data
}

export const RecruitList = () => {
  const [recruit, setRecruit] = useState([])
  const [start, setStart] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const limit = 6

  useEffect(() => {
    const getData = async () => {
      const data = await getRecruits(start, limit)
      setRecruit((prevRecruits) => [...prevRecruits, ...data])
    }
    window.addEventListener('scroll', handleScroll)
    getData()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [start])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      setStart((prevStart) => prevStart + limit)
    }
  }
  return (
    <>
      <BoardLayout>
        <Allwrap>
          <Category />
          <PostWrapper>
            {recruit.map((recruit) => (
              <PostItem key={recruit.recruitIndex}>
                <LikeBtnStyled>💛</LikeBtnStyled>
                <PlatformImgStyled src={recruit.ottPlan.platformImage} />
                <PostPlatformName>{recruit.title}</PostPlatformName>
                <PostContent>월 예상금액 : {recruit.perPrice}</PostContent>
                <MemberStatusStyled>참여중 사용자</MemberStatusStyled>
                <MemberIconWarraper>
                  {recruit.Members.map((member) => (
                    <MemberIconStyled
                      key={member.userIndex}
                      src={member.pictureSignedUrl}
                    />
                  ))}
                </MemberIconWarraper>
                <BtnWrapper>
                  <ViewButtonStyled>상세정보</ViewButtonStyled>
                  <ViewButtonStyled>참여하기</ViewButtonStyled>
                </BtnWrapper>
              </PostItem>
            ))}
          </PostWrapper>
          {isLoading && <StyledLoading />}
        </Allwrap>
      </BoardLayout>
    </>
  )
}
