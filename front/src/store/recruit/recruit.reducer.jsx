import {
  FETCH_RECRUITS,
  TOGGLE_LIKE,
  TOGGLE_JOIN,
  SET_JOINED_POSTS,
  SET_LIKED_POSTS,
} from './recruit.action.type'

const initialState = {
  recruitList: [],
  likedPosts: {},
  joinedPosts: {},
}

export const recruitReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECRUITS:
      return {
        ...state,
        recruitList: [...state.recruitList, ...action.payload],
      }
    case TOGGLE_LIKE:
      return {
        ...state,
        likedPosts: {
          ...state.likedPosts,
          [action.payload]: !state.likedPosts[action.payload],
        },
      }
    case TOGGLE_JOIN:
      return {
        ...state,
        joinedPosts: {
          ...state.joinedPosts,
          [action.payload]: !state.joinedPosts[action.payload],
        },
      }
    case SET_JOINED_POSTS:
      return {
        ...state,
        joinedPosts: action.payload.reduce((acc, post) => {
          acc[post.recruitIndex] = true
          return acc
        }, {}),
      }
    case SET_LIKED_POSTS:
      return {
        ...state,
        likedPosts: action.payload.reduce((acc, post) => {
          acc[post.recruitIndex] = true
          return acc
        }, {}),
      }
    default:
      return state
  }
}
