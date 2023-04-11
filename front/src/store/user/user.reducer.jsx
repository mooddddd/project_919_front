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
  SET_USER_INDEX,
} from './user.action.type'

const initialState = {
  isLoading: false,
  isLogin: false,
  user: null,
  error: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SNS_LOGIN_REQUEST:
      return { ...state, isLoading: true }
    case LOGIN_SUCCESS:
    case SNS_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        user: action.payload,
        error: null,
      }
    case LOGIN_FAILURE:
    case SNS_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        user: null,
        error: action.payload,
      }
    case LOGOUT_REQUEST:
      return { ...state, isLoading: true }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        user: null,
        error: null,
      }
    case LOGOUT_FAILURE:
      return { ...state, isLoading: false, error: action.payload }
    case SET_USER_INDEX:
      return {
        ...state,
        user: {
          ...state.user,
          userIndex: action.payload,
        },
      }
    default:
      return state
  }
}
