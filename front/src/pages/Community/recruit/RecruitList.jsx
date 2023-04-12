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
  LoadingWrapper,
  LoadingText,
} from '../../styled'
import { Category } from '../../content/recruitContents'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { request, domain } from '../../../utils/axios'

const getRecruits = async (url) => {
  const response = await request.get(url)
  return Array.isArray(response.data) ? response.data : []
}

const clickLike = async (userIndex, recruitIndex) => {
  const response = await request.post(`${domain}like/clicklike`, {
    userIndex,
    recruitIndex,
  })
  return response.data
}

const joinMember = async (userIndex, recruitIndex) => {
  const response = await request.post(`${domain}recruit/joinmember`, {
    userIndex,
    recruitIndex,
  })
  return response.data
}

const checkMember = async (userIndex) => {
  const response = await request.get(`${domain}recruit/checkmember`, {
    params: userIndex,
  })
  console.log(response.data)
  return response.data
}

export const RecruitList = () => {
  const [recruit, setRecruit] = useState([])
  const [category, setCategory] = useState('recruiting')
  const [likedPosts, setLikedPosts] = useState({})
  const [start, setStart] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [joinedPosts, setJoinedPosts] = useState({})
  const limit = 6
  const isLogin = useSelector((state) => state.user.isLogin)
  const user = useSelector((state) => state.user.user)
  const postWrapperRef = useRef(null)

  const getCategoryURL = useCallback(
    (category) => {
      let defaultURL = `${domain}recruit/gethiddenrecruit/false?start=${start}&limit=${limit}`
      const categoryURLs = {
        recruiting: defaultURL,
        all: `${domain}recruit/getallrecruit?start=${start}&limit=${limit}`,
        completed: `${domain}recruit/gethiddenrecruit/true?start=${start}&limit=${limit}`,
        youtube: `${domain}recruit/getplatformrecruit/Youtube?start=${start}&limit=${limit}`,
        netflix: `${domain}recruit/getplatformrecruit/Netflix?start=${start}&limit=${limit}`,
        disneyPlus: `${domain}recruit/getplatformrecruit/DisneyPlus?start=${start}&limit=${limit}`,
        tving: `${domain}recruit/getplatformrecruit/Tving?start=${start}&limit=${limit}`,
        watcha: `${domain}recruit/getplatformrecruit/Watcha?start=${start}&limit=${limit}`,
        wavve: `${domain}recruit/getplatformrecruit/Wavve?start=${start}&limit=${limit}`,
      }
      return categoryURLs[category] || defaultURL
    },
    [start, limit]
  )

  const loadMorePosts = useCallback(async () => {
    if (!hasMore) return

    const url = getCategoryURL(category)
    const data = await getRecruits(url)

    if (data.length === 0) {
      setHasMore(false)
    } else {
      setRecruit((prevRecruit) => [...prevRecruit, ...data])
    }
  }, [category, getCategoryURL, hasMore])

  const handleCategoryClick = (newCategory) => {
    setRecruit([])
    setHasMore(true)
    setStart(0)
    setCategory(newCategory)
  }
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

  const handleJoinClick = async (userIndex, recruitIndex) => {
    if (isLogin) {
      await joinMember(userIndex, recruitIndex)
      setJoinedPosts((prevJoinedPosts) => ({
        ...prevJoinedPosts,
        [recruitIndex]: !prevJoinedPosts[recruitIndex],
      }))
    } else {
      alert('로그인이 필요합니다.')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return
      setStart((prevStart) => prevStart + 6)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    console.log('Loading more posts...')
    loadMorePosts()
  }, [start, category, loadMorePosts])

  useEffect(() => {
    const fetchLikedPosts = async () => {
      if (isLogin) {
        const response = await request.get(
          `${domain}like/getuserlike/${user.userIndex}`
        )
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

  useEffect(() => {
    const fetchJoinedPosts = async () => {
      if (isLogin) {
        try {
          const response = await checkMember(user.userIndex)
          setJoinedPosts(
            response.data.reduce((acc, post) => {
              acc[post.recruitIndex] = true
              return acc
            }, {})
          )
        } catch (error) {
          console.error('Error fetching joined posts:', error)
        }
      } else {
        setJoinedPosts({})
      }
    }
    fetchJoinedPosts()
  }, [isLogin, user, recruit])

  return (
    <>
      <BoardLayout>
        <Allwrap>
          <Category onCategoryClick={handleCategoryClick} />
          <PostWrapper ref={postWrapperRef}>
            {recruit.map((recruit, index) => (
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
                  <Link
                    to={`/community/recruit/view/${recruit.recruitIndex}`}
                    style={{ width: '100%', display: 'block' }}
                  >
                    <ViewButtonStyled>상세정보</ViewButtonStyled>
                  </Link>
                  <Link style={{ width: '100%', display: 'block' }}>
                    <ViewButtonStyled
                      onClick={() =>
                        handleJoinClick(user.userIndex, recruit.recruitIndex)
                      }
                    >
                      {joinedPosts[recruit.recruitIndex]
                        ? '참여중'
                        : '참여하기'}
                    </ViewButtonStyled>
                  </Link>
                </BtnWrapper>
              </PostItem>
            ))}
          </PostWrapper>
        </Allwrap>
      </BoardLayout>
    </>
  )
}
