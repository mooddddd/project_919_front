const initState = {
  isLogin: true,
  error: null,
  isLogin: false,
  data: {
    userId: '',
    userNick: '',
  },
}

export const USER_LOGIN = 'USER/LOGIN'
export const USER_LOGOUT = 'USER/LOGOUT'

// export const sigupEmail = ({ userId, userNick }) => ({
//   type: USER_LOGIN,
//   payload: { data: { userId, userNick } },
// })

export const user = (state = initState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isLogin: true, data: action.payload }
    case USER_LOGOUT:
      return { ...state, isLogin: false, data: action.payload }
    default:
      return state
  }
}
