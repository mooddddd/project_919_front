import { FormStyled } from '../../styled'
import { Button } from '../../../common'
import { request, domain } from '../../../utils'
import { useInput } from '../../../hooks'
import { InputStyled, TextStyled } from '../../../common/box/styled'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const RecruitForm = () => {
  const height = '1.5rem'
  const navigate = useNavigate()
  const userIndex = useSelector((state) => state.user.user.userIndex)

  const plan = useInput('')
  const title = useInput('')
  const member = useInput('1')
  const startDate = useInput('')
  const endDate = useInput('')
  const openChatLink = useInput('')
  const content = useInput('')
  const [currentPrice, setCurrentPrice] = useState(null)
  const [perPrice, setPerPrice] = useState(0)
  const [ottPlanIndex, setOttPlanIndex] = useState(null)
  const [platformList, setPlatformList] = useState(['플랫폼을 선택하세요'])
  const [selectedOtt, setSelectedOtt] = useState('')
  const [planList, setPlanList] = useState([
    { planName: '플랜 종류를 선택하세요' },
  ])
  const [selectedPlan, setSelectedPlan] = useState('')

  // 랜더될 때 플랫폼 종류 불러오기
  useEffect(() => {
    ;(async () => {
      try {
        const response = await request.get(`${domain}cacul/getplatform`)
        const list = response.data.map((item) => item.platformName)
        setPlatformList(list)
      } catch (e) {
        console.log(`error`)
      }
    })()
  }, [])

  // 플랫폼 카테고리(맵 사용)
  const ottList = platformList.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ))

  // 플랫폼에 맞는 플랜 불러오기(서브카테고리 불러오기)
  const getPlanlist = async (platformName) => {
    setSelectedOtt(platformName)
    try {
      const { data } = await request.get(
        `${domain}cacul/gettype/${platformName}`
      )
      setPlanList(data)
    } catch (e) {
      console.log(`error`)
    }
  }

  // 초기 플랫폼 선택
  const handlePlatformChange = (e) => {
    const platformName = e.target.value

    if (platformName === '플랫폼을 선택하세요') {
      setPlanList([])
    } else {
      getPlanlist(platformName)
    }
  }

  // 플랜 카테고리
  const planListView = planList.map((item, index) => (
    <option key={index} value={item.planName}>
      {item.planName}
    </option>
  ))

  const planInfo = (e) => {
    const value = planList.find((v) => v.planName === e.target.value)
    value ? setSelectedPlan(value) : console.log(`tq`)
    setOttPlanIndex(value.ottPlanIndex)
    fetchCurrentPrice(value.ottPlanIndex)
  }
  const fetchCurrentPrice = async (planIndex) => {
    try {
      const response = await request.get(`${domain}cacul/getprice/${planIndex}`)
      const price = parseInt(response.data)
      setCurrentPrice(price)
    } catch (e) {
      console.log(`error`)
    }
  }
  // 예상금액 처리
  useEffect(() => {
    if (currentPrice != null) {
      setPerPrice(Math.ceil(currentPrice / parseInt(member.value)))
    } else if (selectedPlan.price) {
      setPerPrice(Math.ceil(selectedPlan.price / parseInt(member.value)))
    }
  }, [currentPrice, member.value, selectedPlan.price])

  // 게시글 insert 함수
  const submitHandler = async (e) => {
    e.preventDefault()
    let body = {
      userIndex,
      ottPlanIndex: selectedPlan.ottPlanIndex,
      title: title.value,
      openChatLink: openChatLink.value,
      content: content.value,
      startDate: startDate.value,
      endDate: endDate.value,
      perPrice: perPrice,
    }
    console.log(body)
    const result = await request.post(`${domain}recruit/createrecruit`, body)
    console.log('Server Response:', result) // 서버 응답을 콘솔에 출력합니다.
    const recruitIndex = result.data.recruitIndex
    navigate(`/community/recruit/view/${recruitIndex}`)
  }

  return (
    <FormStyled onSubmit={submitHandler}>
      <ul>
        <li>
          <div className="left" name="platformName">
            플랫폼
          </div>
          <select value={selectedOtt} onChange={handlePlatformChange}>
            <option value="플랫폼을 선택하세요">플랫폼을 선택하세요</option>
            {ottList}
          </select>
        </li>

        <li>
          <div className="left" name="planName" {...plan}>
            플랜 종류
          </div>
          <select onChange={planInfo}>{planListView}</select>
        </li>

        <li>
          <div className="left" name="title">
            글제목
          </div>
          <InputStyled
            width="80%"
            height={height}
            placeholder="(게시글의 제목을 입력해주세요. 파티원을 모집하기 위한 적극적인 어필이 필요합니다!)"
            {...title}
            required
          />
        </li>

        <li>
          <div className="left">모집인원</div>
          <InputStyled
            type="number"
            width="4rem"
            height={height}
            {...member}
            min="1"
            max={`${selectedPlan.limit}`}
          />
          명
        </li>

        <li>
          <div className="left" name="startDate">
            예상 시작 날짜
          </div>
          <InputStyled
            type="date"
            width="9rem"
            height={height}
            {...startDate}
          />
        </li>

        <li>
          <div className="left" name="endDate">
            예상 종료 날짜
          </div>
          <InputStyled type="date" width="9rem" height={height} {...endDate} />
        </li>

        <li>
          <div className="left" name="openChatLink">
            오픈채팅방 링크
          </div>
          <InputStyled
            width="80%"
            height={height}
            placeholder="(파티원들끼리 소통할 채팅방의 링크를 입력해주세요.)"
            {...openChatLink}
          />
        </li>

        <li>
          <div className="left" name="content">
            공지사항
          </div>
          <TextStyled
            width="80%"
            height="10rem"
            placeholder="(파티원들이 서로 공유할 공지사항입니다. 자세할수록 좋아요.)"
            {...content}
          />
        </li>
        <li>
          <div className="left">예상금액</div>
          <InputStyled
            width="60%"
            height={height}
            value={perPrice}
            onChange={(e) => setPerPrice(e.target.value)}
          />
          원+결제 수수료
        </li>
      </ul>
      <Button type="submit" width="15rem" height="3rem" color="red">
        파티 생성!
      </Button>
    </FormStyled>
  )
}
