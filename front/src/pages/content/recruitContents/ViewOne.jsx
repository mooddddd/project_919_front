import {
  ViewOneStyled,
  PlatformImgStyled,
  TextBig,
  TextNormal,
  TextSmall,
  BtnArea,
} from '../../styled'
import { Button } from '../../../common'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { request, domain } from '../../../utils'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ViewOne = () => {
  const [member, setMember] = useState(true)
  const [data, setData] = useState({})
  const { recruitIndex } = useParams()
  const { user } = useSelector((state) => state.user)
  const userIndex = user.userIndex

  const joinMember = async () => {
    try {
      const response = await request.post(`${domain}recruit/joinmember`, {
        userIndex,
        recruitIndex,
      })
      setMember(false)
    } catch (e) {
      console.log(`error`)
    }
  }

  useEffect(() => {
    ;(async () => {
      try {
        const response = await request.get(
          `${domain}recruit/getonerecruit/${recruitIndex}`
        )
        const memberCount = response.data.Members.length
        setData({ ...response.data, memberCount })
      } catch (e) {
        console.log(`error`)
      }
    })()
  }, [])

  return (
    <>
      <ViewOneStyled>
        <div className="firstDiv">
          <PlatformImgStyled
            src={data.ottPlan?.platformImage}
            width="50%"
            display="block"
          />
        </div>
        <div className="planNmember">
          <div className="plan">
            <TextBig>
              {data.ottPlan?.planName} / {data.ottPlan?.price}{' '}
              {data.ottPlan?.Country?.countryCode}
            </TextBig>
          </div>
          <div className="member">
            <TextNormal>현재 </TextNormal>
            <TextBig color="red">{data.ottPlan?.limit}</TextBig>
            <TextNormal> 명 중 </TextNormal>
            <TextBig color="red">{data.memberCount}</TextBig>
            <TextNormal> 명이 모였어요!</TextNormal>
          </div>
        </div>
        <div>
          <TextBig>{data.title}</TextBig>
          <br />
          <TextSmall color="gray">파티장 : {data.User?.userNick} </TextSmall>
        </div>
        <div className="lastDiv">
          <div className="left">
            <div className="date">
              <TextNormal>
                {data.startDate} ~ {data.endDate}
              </TextNormal>
              <TextNormal color="gray"> 까지 함께하고 싶어요.</TextNormal>
            </div>

            <div className="openChatLink">
              오픈채팅방 링크 : {data.openChatLink}
            </div>

            <div className="content">
              <TextSmall>{data.content}</TextSmall>
            </div>
          </div>
          <div className="right">
            <TextNormal>1인 당 예상 금액</TextNormal>
            <br />
            <TextBig>월 약 </TextBig>
            <TextBig color="red" bold="bold">
              {data.perPrice}
            </TextBig>
            <TextBig> 원</TextBig> <br />
            <TextSmall color="lightGray">
              글작성 시간 기준 환율을 적용한 금액으로, 절대적인 금액이 아닙니다.
              <br />
              결제일 기준 환율에 따라 금액이 변동될 수 있으니 주의하세요!
            </TextSmall>
            {member ? (
              <Button
                width="7rem"
                height="2rem"
                color="red"
                onClick={joinMember}
              >
                참여하기
              </Button>
            ) : (
              <Button width="7rem" height="2rem" color="gray">
                참여완료
              </Button>
            )}
          </div>
        </div>
        <BtnArea>
          <Button width="10rem" height="2rem" color="red">
            <NavLink to="/community/recruit/modify/${recruitIndex}">
              수정하기
            </NavLink>
          </Button>
          <Button width="10rem" height="2rem" color="red">
            <NavLink to="/community/recruit/list">목록으로</NavLink>
          </Button>
        </BtnArea>
      </ViewOneStyled>
    </>
  )
}
