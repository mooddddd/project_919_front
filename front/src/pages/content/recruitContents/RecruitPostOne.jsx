import { PostOneStyled, PlatformImgStyled } from '../../styled'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { request } from '../../../utils'

export const PostOne = () => {
  const [heart, setHeart] = useState(false)
  const [contentsList, setContentsList] = useState([])

  const clickHeart = (e) => {
    setHeart(!heart)
  }

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await request.get('recruit/list')
        setContentsList(data)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  const list = contentsList.map((v) => {
    return (
      <PostOneStyled key={v.recruitIndex}>
        <div className="star" onClick={clickHeart}>
          {heart ? '💛' : '🤍'}
        </div>
        <NavLink to={`/community/recruit/view/${v.recruitIndex}`}>
          <div className="logoImg">
            <PlatformImgStyled
              src={`${v['ottPlan.ottPlatform.Image']}`}
              width="13rem"
            />
          </div>

          <div className="content">
            <div className="limitNprice">
              <div>
                <span className="limit">{v['ottPlan.limit'] - 1}</span>명{' '}
                <span className="ing"> 모집중! </span>
              </div>

              <div>
                월
                <span className="price">
                  {v['ottPlan.price'] / v['ottPlan.limit']}
                </span>
                원
              </div>
            </div>

            <div className="subjec">
              <span>{v.title}</span>
            </div>

            <div className="nickname">
              <PlatformImgStyled src="/img/checkIcon.png" width="0.7rem" />
              <span> {v['User.userNick']}</span>
            </div>
          </div>
        </NavLink>
      </PostOneStyled>
    )
  })

  return list
}
