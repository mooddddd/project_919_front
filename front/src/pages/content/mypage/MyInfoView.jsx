import { Button } from '../../../common'
import { useState } from 'react'
import { requestMulter, domain } from '../../../utils'
import { useInput } from '../../../hooks/useInput'
import { JoinProfile, JoinBody, InputBox, Message, Alert } from '../../styled'
import { useSelector } from 'react-redux'

const publicPath = process.env.PUBLIC_URL

const Info = ({ infoData, setModifyInfo }) => {
  return (
    <>
      <JoinProfile>
        {infoData[3] ? (
          <>
            <img
              src={`${publicPath}}/${infoData[3]}`}
              className="profileIcon"
            />
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
        저장하기
      </Button>
    </>
  )
}

const Modify = ({ infoData, setModifyInfo, setMyInfo }) => {
  const userIndex = useSelector((state) => state.user.user.userIndex)
  const userNick = useInput(`${infoData[1]}`)
  const pw = useInput('')

  const [img, setImg] = useState(`${publicPath}/${infoData[3]}`)
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
      const { data } = await requestMulter.put(`${domain}user/update`, body)
      setAlertMessage('수정이 완료되었습니다.')
      setAlertStatus('success')
      console.log(data)
      const { userId, userNick, phone, picture } = data
      setMyInfo([userId, userNick, phone, picture])
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

export const MyInfoView = ({ infoData, setMyInfo }) => {
  const [modifyInfo, setModifyInfo] = useState(false)

  return (
    <>
      <JoinBody>
        {modifyInfo ? (
          <Modify
            infoData={infoData}
            modifyInfo={modifyInfo}
            setModifyInfo={setModifyInfo}
            setMyInfo={setMyInfo}
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
