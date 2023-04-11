// RecruitList.js
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
} from '../../styled'
import { Category } from '../../content/recruitContents'
import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { request, domain } from '../../../utils/axios'

const getRecruits = async (url) => {
  const response = await request.get(url)
  return Array.isArray(response.data) ? response.data : []
}

const getLikeCount = async (recruitIndex) => {
  const response = await request.get(`${domain}like/getlike/${recruitIndex}`, {
    params: { recruitIndex },
  })
  return response.data
}

const clickLike = async (userIndex, recruitIndex) => {
  const response = await request.post(`${domain}like/clicklike`, {
    userIndex,
    recruitIndex,
  })
  return response.data
}

export const RecruitList = () => {
  const [recruit, setRecruit] = useState([])
  const [likeCounts, setLikeCounts] = useState({})
  const [likedPosts, setLikedPosts] = useState({})
  const [start, setStart] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const dispatch = useDispatch()
  const limit = 6
  const isLogin = useSelector((state) => state.user.isLogin)
  const user = useSelector((state) => state.user.user)

  const handleScroll = useCallback(() => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight
    ) {
      if (hasMore) {
        setStart((prevStart) => prevStart + limit)
      }
    }
  }, [hasMore])

  const handleCategoryClick = useCallback(
    async (category) => {
      let url = ''
      let defaultURL = `${domain}recruit/gethiddenrecruit/false?start=${start}&limit=${limit}`
      const categoryURLs = {
        recruiting: defaultURL,
        completed: `${domain}recruit/gethiddenrecruit/true?start=${start}&limit=${limit}`,
        youtube: `${domain}recruit/getplatformrecruit/Youtube?start=${start}&limit=${limit}`,
        netflix: `${domain}recruit/getplatformrecruit/Netflix?start=${start}&limit=${limit}`,
        disneyPlus: `${domain}recruit/getplatformrecruit/DisneyPlus?start=${start}&limit=${limit}`,
        tving: `${domain}recruit/getplatformrecruit/Tving?start=${start}&limit=${limit}`,
        watcha: `${domain}recruit/getplatformrecruit/Watcha?start=${start}&limit=${limit}`,
        wavve: `${domain}recruit/getplatformrecruit/Wavve?start=${start}&limit=${limit}`,
      }
      url = categoryURLs[category] || defaultURL

      setRecruit([])
      setHasMore(true)
      setStart(0)
      const data = await getRecruits(url)
      setRecruit(data)
    },
    [start]
  )

  const handleLikeClick = async (userIndex, recruitIndex) => {
    if (isLogin) {
      await clickLike(userIndex, recruitIndex)
      setLikedPosts((prevLikedPosts) => ({
        ...prevLikedPosts,
        [recruitIndex]: !prevLikedPosts[recruitIndex],
      }))
    } else {
      alert('로그인이 필요합니다.')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleCategoryClick('recruiting')

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    const fetchLikeCounts = async () => {
      const likeCounts = await Promise.all(
        recruit.map((r) => getLikeCount(r.recruitIndex))
      )
      setLikeCounts(
        likeCounts.reduce((acc, count, index) => {
          acc[recruit[index].recruitIndex] = count
          return acc
        }, {})
      )
    }
    if (recruit.length > 0) {
      fetchLikeCounts()
    }
  }, [recruit])

  useEffect(() => {
    const fetchLikedPosts = async () => {
      if (isLogin) {
        const response = await request.get(
          `${domain}like/getuserlike/${user.userIndex}`
        )
        console.log(`test to response in fetchLikedPots ${response.data}`)
        setLikedPosts(
          response.data.reduce((acc, post) => {
            acc[post.recruitIndex] = true
            return acc
          }, {})
        )
      } else {
        setLikedPosts({})
      }
    }
    fetchLikedPosts()
  }, [isLogin, user, recruit])

  return (
    <>
      <BoardLayout>
        <Allwrap>
          <Category onCategoryClick={handleCategoryClick} />
          <PostWrapper>
            {recruit.map((recruit) => (
              <PostItem key={recruit.recruitIndex}>
                <LikeBtnStyled
                  onClick={() =>
                    handleLikeClick(user.userIndex, recruit.recruitIndex)
                  }
                >
                  {likedPosts[recruit.recruitIndex] ? '💛' : '🤍'}
                </LikeBtnStyled>
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
        </Allwrap>
      </BoardLayout>
    </>
  )
}
