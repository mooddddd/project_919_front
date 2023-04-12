import { SET_LIKED_POSTS, SET_JOINED_POSTS } from './recruit.action.type'

const initialState = {
  likedPosts: {},
  joinedPosts: {},
}

export const recruitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKED_POSTS:
      return {
        ...state,
        likedPosts: action.payload,
      }
    case SET_JOINED_POSTS:
      return {
        ...state,
        joinedPosts: action.payload,
      }
    default:
      return state
  }
}
