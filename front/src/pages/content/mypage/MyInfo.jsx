import { Button } from '../../../common'
import { useState } from 'react'
import { requestMulter, domain } from '../../../utils'
import { useInput } from '../../../hooks/useInput'
import { JoinProfile, JoinBody, InputBox, Message, Alert } from '../../styled'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserInfo } from '../../../store/user/user.action.api'
import { getCookie } from '../../../utils'
import { useNavigate } from 'react-router-dom'

const publicPath = process.env.PUBLIC_URL

export const MyInfo = () => {
  const navigator = useNavigate()
  const [myInfo, setMyInfo] = useState(['내정보 테스트'])
  const [modifyInfo, setModifyInfo] = useState(false)
  const isLogin = useSelector((state) => state.user.isLogin)

  const token = getCookie('token')

  useEffect(() => {
    ;(async () => {
      try {
        if (!isLogin) {
          navigator('/')
          return
        } else {
          const data = await getUserInfo(token)
          console.log(data)
          const { userId, userNick, phone, picture, signedUrl } = data
          setMyInfo([userId, userNick, phone, picture, signedUrl])
        }
      } catch (e) {
        throw new Error(e)
      }
    })()
  }, [])
  const infoData = myInfo

  return (
    <>
      <JoinBody>
        {modifyInfo ? (
          <Modify
            infoData={infoData}
            modifyInfo={modifyInfo}
            setModifyInfo={setModifyInfo}
            setMyInfo={setMyInfo}
            token={token}
          />
        ) : (
          <Info
            infoData={infoData}
            modifyInfo={modifyInfo}
            setModifyInfo={setModifyInfo}
          />
        )}
      </JoinBody>
    </>
  )
}

const Info = ({ infoData, setModifyInfo }) => {
  return (
    <>
      <JoinProfile>
        {infoData[4] ? (
          <>
            <img src={`${infoData[4]}`} className="profileIcon" />
          </>
        ) : (
          <>
            <img
              src={`${publicPath}/img/profile.png`}
              className="profileIcon"
            />
          </>
        )}
      </JoinProfile>
      userId : {infoData[0]}
      <br />
      userNick : {infoData[1]}
      <br />
      phone : {infoData[2]}
      <br />
      <Button
        color="red"
        width="5rem"
        height="2rem"
        onClick={(e) => {
          setModifyInfo(true)
        }}
      >
        수정하기
      </Button>
    </>
  )
}

const Modify = ({ infoData, setModifyInfo, setMyInfo, token }) => {
  const userIndex = useSelector((state) => state.user.user.userIndex)
  const userNick = useInput(`${infoData[1]}`)
  const pw = useInput('')

  const [img, setImg] = useState(`${infoData[4]}`)
  const [confirmPw, setConfirmPw] = useState(null)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertStatus, setAlertStatus] = useState('')

  const onConfirmPwHandler = (e) => {
    setConfirmPw(e.target.value)
  }

  const modifyHandler = async (e) => {
    e.preventDefault()

    if (pw.value !== confirmPw) {
      setAlertMessage('비밀번호를 확인해주세요')
      setAlertStatus('error')
      return
    } else if (!pw.value) {
      setAlertMessage('비밀번호를 입력해주세요')
      setAlertStatus('error')
    }

    try {
      let body = new FormData(e.target)
      const { data } = await requestMulter.put(`${domain}user/update`, body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setAlertMessage('수정이 완료되었습니다.')
      setAlertStatus('success')
      console.log(data)
      const { userId, userNick, phone, picture, signedUrl } = data
      setMyInfo([userId, userNick, phone, picture, signedUrl])
      setModifyInfo(false)
    } catch (e) {
      console.log(`error`)
    }
  }

  const changeImgHandler = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImg(reader.result)
    }
  }

  return (
    <>
      {alertMessage && (
        <Alert
          onAnimationEnd={() => {
            setAlertMessage('')
            setAlertStatus('')
          }}
          style={{
            backgroundColor: alertStatus === 'success' ? '#4CAF50' : '#f44336',
          }}
        >
          {alertMessage}
        </Alert>
      )}

      <form onSubmit={modifyHandler} encType="multipart/form-data">
        <input type="hidden" name="userIndex" value={userIndex} />
        <JoinProfile>
          <img
            src={img ? img : `${publicPath}/${infoData[3]}`}
            className="profileIcon"
            alt="profileIcon"
          />
          <input
            type="file"
            name="picture"
            accept="image/jpg, image/png, image/jpeg"
            onChange={changeImgHandler}
            multiple
          />
        </JoinProfile>
        userId : {infoData[0]}
        <br />
        userPw :
        <InputBox
          name="newPassword"
          id="newPassword"
          type="password"
          placeholder="🔒 비밀번호를 입력해주세요"
          required
          {...pw}
        />
        <InputBox
          type="password"
          placeholder="🔒 비밀번호를 다시 한번 입력해주세요"
          required
          onChange={onConfirmPwHandler}
        />
        {pw.value &&
          confirmPw &&
          (pw.value === confirmPw ? (
            <Message className="confirm">비밀번호가 일치합니다</Message>
          ) : (
            <Message className="alert">비밀번호 확인이 필요합니다</Message>
          ))}
        userNick : <InputBox name="userNick" {...userNick} />
        <br />
        phone : {infoData[2]}
        <br />
        {/* <img src={img ? img : `${publicPath}/img/profile.png`} /> */}
        <Button color="red" width="5rem" height="2rem">
          수정완료!
        </Button>
      </form>
      <Button
        color="red"
        width="5rem"
        height="2rem"
        onClick={(e) => {
          setModifyInfo(false)
        }}
      >
        수정취소
      </Button>
    </>
  )
}
