import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SNS_LOGIN_REQUEST,
  SNS_LOGIN_SUCCESS,
  SNS_LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './user.action.type'
import { domain, request } from '../../utils/axios'

export const loginRequest = () => ({ type: LOGIN_REQUEST })
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })

export const snsLoginRequest = () => ({ type: SNS_LOGIN_REQUEST })
export const snsLoginSuccess = (user) => ({
  type: SNS_LOGIN_SUCCESS,
  payload: user,
})
export const snsLoginFailure = (error) => ({
  type: SNS_LOGIN_FAILURE,
  payload: error,
})

export const logoutRequest = () => ({ type: LOGOUT_REQUEST })
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })
export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: error,
})

export const loginUser = (credentials, endpoint) => async (dispatch) => {
  const isSNSLogin = endpoint.includes('auth')

  if (isSNSLogin) {
    window.location.href = `${domain}${endpoint}`
  } else {
    dispatch(loginRequest())
  }

  try {
    const response = await request.post(`${domain}${endpoint}`, credentials)
    const { token } = response.data
    document.cookie = `token=${token};`

    const userResponse = await request
      .get(`${domain}user/getinfo`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        throw new Error(`When error occured in user/getinfo: ${error}`)
      })

    const userData = {
      ...userResponse.data,
      userPw: undefined,
    }
    if (isSNSLogin) {
      dispatch(snsLoginSuccess(userData))
    } else {
      dispatch(loginSuccess(userData))
    }
  } catch (error) {
    if (isSNSLogin) {
      dispatch(snsLoginFailure(error))
    } else {
      dispatch(loginFailure(error))
    }
    throw error
  }
}

export const logoutUser = () => async (dispatch) => {
  dispatch(logoutRequest())
  try {
    const response = await request.get(`${domain}user/logout`)
    if (response.status === 200) {
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    } else {
      console.log('logout failed in user.action.controller')
    }
  } catch (error) {
    dispatch(logoutFailure(error))
  }
}
