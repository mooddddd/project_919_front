import {
  Wrapper,
  YoutubeWrapper,
  YoutubeWrap,
  YoutubeLogoWrap,
  NetflixWrapper,
  NetflixLogoWrap,
  NetflixWrap,
  WatchaWrapper,
  WatchaWrap,
  WatchaLogoWrap,
  Parallax,
} from '../styled'
import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { snsLoginSuccess } from '../../store/user/user.action.controller'
import { getUserInfo } from '../../store/user/user.action.api'

const publicPath = process.env.PUBLIC_URL

export const MainContent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [checkedSNSLogin, setCheckedSNSLogin] = useState(false)
  const checkSNSLogin = useCallback(async () => {
    //URL Token 획득 로직
    const searchParams = new URLSearchParams(location.search)
    const tokenFramUrl = searchParams.get('token')
    // Cookie 에서 토큰 획득 로직
    const tokenFromCookie = getCookie('token')

    // URL, Cookie에서 획득한 토큰 사용
    const token = tokenFramUrl || tokenFromCookie

    if (token) {
      try {
        const userData = await getUserInfo(token)
        dispatch(snsLoginSuccess(userData))
        navigate('/')
      } catch (e) {
        console.log(e)
        console.error('SNS Login Error:', e)
      }
    } else {
      console.log('token')
    }
  }, [dispatch, navigate, location])

  const getCookie = (cname) => {
    const name = cname + '='
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  useEffect(() => {
    if (!checkedSNSLogin) {
      checkSNSLogin()
      setCheckedSNSLogin(true)
    }
  }, [checkSNSLogin, checkedSNSLogin])

  return (
    <>
      <Wrapper>
        <Parallax />
        <Parallax>
          <WatchaWrapper>
            <WatchaLogoWrap>
              <img
                className="mainWatcha mainWatchaLogo"
                src={`${publicPath}/img/platformLogo/watcha.png`}
                alt="mainWatchaLogo"
              />
            </WatchaLogoWrap>
            <WatchaWrap />
          </WatchaWrapper>
        </Parallax>
        <Parallax />
        <Parallax>
          <NetflixWrapper>
            <NetflixLogoWrap>
              <img
                className="mainNetflix mainNetflixLogo"
                src={`${publicPath}/img/platformLogo/netflix.png`}
                alt="mainNetflixLogo"
              />
            </NetflixLogoWrap>
            <NetflixWrap />
          </NetflixWrapper>
        </Parallax>
        <Parallax />
        <Parallax>
          <YoutubeWrapper>
            <YoutubeLogoWrap>
              <img
                className="mainYoutube mainYoutubeLogo"
                src={`${publicPath}/img/platformLogo/youtube.png`}
                alt="mainYoutubeLogo"
              />
            </YoutubeLogoWrap>
            <YoutubeWrap />
          </YoutubeWrapper>
        </Parallax>
        <Parallax />
      </Wrapper>
    </>
  )
}
