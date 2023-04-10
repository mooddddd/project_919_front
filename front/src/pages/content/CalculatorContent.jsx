import { useEffect, useState } from 'react'
import { request } from '../../utils'
import { MyWrapper, MyBackground } from '../styled'

export const CalculatorContent = () => {
  const [platform, setPlatform] = useState([])
  const [plan, setPlan] = useState([])
  const [price, setPrice] = useState('0')
  const [calculPrice, setCalculPrice] = useState(price)
  const [member, setMember] = useState('1')

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await request.get(`/cacul/getHolePlatform`)
        setPlatform(data)
      } catch (e) {
        throw new Error(e)
      }
    })()
  }, [])

  const selectPlatformHandler = async (e) => {
    const selectPlatform = e.target.innerHTML
    const { data } = await request.get(`/cacul/gettype/${selectPlatform}`)
    setPlan(data)
  }

  const platformList = platform.map((v) => {
    return (
      <button key={v.ottPlatformIndex} onClick={selectPlatformHandler}>
        {v.platformName}
      </button>
    )
  })

  const selectPlanHandler = async (e) => {
    const selectPlan = e.target.value
    const { data } = await request.get(`cacul/getprice/${selectPlan}`)
    setPrice(data)
  }

  const planList = plan.map((v) => {
    return (
      <button
        key={v.ottPlanIndex}
        onClick={selectPlanHandler}
        value={v.ottPlanIndex}
      >
        {v.planName}
      </button>
    )
  })

  const calculator = (e) => {
    if (price === '0') alert('요금제를 선택하세요!')
    const test = Math.ceil(price / member)
    setCalculPrice(test)
  }

  return (
    <>
      <MyWrapper>
        <MyBackground width="90%">
          <div>{platformList}</div>
          <div>{planList}</div>
          <div>요금제 금액 : {price} 원</div>
          <div>
            예상 파티원 수 :
            <input
              min="1"
              max="5"
              type="number"
              onChange={(e) => {
                setMember(e.target.value)
              }}
              defaultValue="1"
            />
          </div>
          <div>
            <button onClick={calculator}>계산하기!</button>

            <div>최종 금액 : 약 {calculPrice} 원</div>
          </div>
        </MyBackground>
      </MyWrapper>
    </>
  )
}
