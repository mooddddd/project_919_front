import { useEffect, useState } from 'react'
import { request } from '../../utils'
import {
  CalWrapper,
  CalDiv,
  ContentTop,
  ContentBottom,
  OttBtn,
  PlanBtn,
  Left,
  Middle,
  Right,
  BigSpan,
  BigP,
  SuperSpan,
  SmallP,
} from '../styled'
import { Button } from '../../common/Button'

const publicPath = process.env.PUBLIC_URL
const blanc = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>

export const CalculatorContent = () => {
  const [platform, setPlatform] = useState([])
  const [plan, setPlan] = useState([])
  const [price, setPrice] = useState('0')
  const [calculPrice, setCalculPrice] = useState(price)
  const [member, setMember] = useState('1')
  const [selectedPlan, setSelectedPlan] = useState('')
  const [currency, setCurrency] = useState([])
  const [time, setTime] = useState('잠시만 기다려주세요')

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await request.get(`/cacul/getHoleInfo`)
        const { result, currency } = data
        setPlatform(result)
        setCurrency(currency)
        setTime(currency[0].currencyDate)
      } catch (e) {
        throw new Error(e)
      }
    })()
  }, [])

  // 데이터 불러오기+상태변경
  const selectPlatformHandler = async (e) => {
    const selectPlatform = e.target.alt
    const { data } = await request.get(`/cacul/gettype/${selectPlatform}`)
    setPlan(data)
  }
  const selectPlanHandler = async (e) => {
    const selectPlan = e.target.value
    setSelectedPlan(e.target.innerHTML)
    const { data } = await request.get(`cacul/getprice/${selectPlan}`)
    setPrice(data)
  }
  const calculator = (e) => {
    if (price === '0') alert('요금제를 선택하세요!')
    const test = Math.ceil(price / member)
    setCalculPrice(test)
  }

  // 변경된 상태 map 사용
  const platformList = platform.map((v) => {
    return (
      <OttBtn
        className="ottBtn"
        key={v.ottPlatformIndex}
        onClick={selectPlatformHandler}
      >
        <img src={`${v.Image}`} alt={`${v.platformName}`} />
      </OttBtn>
    )
  })
  const planList = plan.map((v) => {
    return (
      <PlanBtn
        className="planBtn"
        key={v.ottPlanIndex}
        onClick={selectPlanHandler}
        value={v.ottPlanIndex}
      >
        {v.planName}
      </PlanBtn>
    )
  })
  const currencyList = currency.map((v) => {
    return (
      <div className="currency">
        <div>
          🔹 1 {v['Country.countryCode']} = {v.currencyValue}원
        </div>
        <div>
          {blanc}({v['Country.countryName']})
        </div>
      </div>
    )
  })

  console.log(currency)

  return (
    <>
      <CalWrapper>
        <div className="content">
          <div className="sort">
            <ContentTop>
              <h1>요금제 계산기</h1>
              <p>
                본 계산기의 결과는 현재 일자 기준의 환율을 적용한 금액으로,
                절대적인 금액이 아닙니다. <br />
                카드 수수료 및 결제일 기준 환율에 따라 금액이 변동될 수 있으니
                주의하세요!
              </p>
            </ContentTop>
            <ContentBottom>
              <Left>
                <div className="ott">{platformList}</div>
                <div className="plan">{planList}</div>
              </Left>
              <Middle>
                <div className="planInfo">
                  <p>선택하신 요금제는</p>
                  <p>
                    <BigSpan>{selectedPlan}</BigSpan> 입니다.
                  </p>
                  <SmallP>
                    (해외 통화의 경우 실결제 금액과 다를 수 있습니다.)
                  </SmallP>
                </div>
                <div>
                  ▶️ 요금제 금액 : <BigSpan>{price}</BigSpan> 원
                </div>
                <div className="member">
                  ▶️ 예상 파티원 수 :
                  <input
                    min="1"
                    max="5"
                    type="number"
                    onChange={(e) => {
                      setMember(e.target.value)
                    }}
                    defaultValue="1"
                  />
                  명
                </div>
                <Button
                  onClick={calculator}
                  width="80%"
                  height="3rem"
                  color="red"
                >
                  계산하기!
                </Button>
                <BigP>〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️</BigP>
                <div className="price">
                  <BigP>1인 당 예상 금액 </BigP>
                  <span>🎉 약 </span>
                  <SuperSpan>{calculPrice}</SuperSpan>
                  <span> 원</span>
                </div>
                〰️〰️〰️〰️ <br />
                o
                <br />o
                <img src={`${publicPath}/img/test.png`} /> <br />
                <Button color="red" width="100%" height="2rem">
                  <a href="/community/recruit/list">파티원 구하러 가기!</a>
                </Button>
              </Middle>
              <Right>
                <BigSpan>🌐 Today's exchange rates 🌐</BigSpan>
                <br />
                <SmallP>기준 날짜 :{time}</SmallP>
                <SmallP>(환율 정보는 APILayer에서 제공됩니다.)</SmallP>
                <br />
                <div>{currencyList}</div>
                <br />
              </Right>
            </ContentBottom>
            <div className="notice"></div>
          </div>
        </div>
      </CalWrapper>
    </>
  )
}
