import {
  FETCH_RECRUITS,
  TOGGLE_LIKE,
  TOGGLE_JOIN,
  SET_JOINED_POSTS,
  SET_LIKED_POSTS,
} from './recruit.action.type'
import {
  getRecruitsApi,
  clickLikeApi,
  joinMemberApi,
  checkMemberApi,
  getLikedPostsApi,
} from './recruit.action.api'

export const fetchRecruits = (url) => async (dispatch) => {
  try {
    const data = await getRecruitsApi(url)
    dispatch({ type: FETCH_RECRUITS, payload: data })
  } catch (e) {
    console.log(`This error occurring in fetchRecruits action: ${e}`)
  }
}

export const toggleLike = (userIndex, recruitIndex) => async (dispatch) => {
  try {
    await clickLikeApi(userIndex, recruitIndex)
    dispatch({ type: TOGGLE_LIKE, payload: recruitIndex })
  } catch (e) {
    console.log(`This error occurring in toggleLike action: ${e}`)
  }
}

export const toggleJoin = (userIndex, recruitIndex) => async (dispatch) => {
  try {
    await joinMemberApi(userIndex, recruitIndex)
    dispatch({ type: TOGGLE_JOIN, payload: recruitIndex })
  } catch (e) {
    console.log(`This error occurring in toggleJoin action: ${e}`)
  }
}

export const setJoinedPosts = (userIndex) => async (dispatch) => {
  try {
    const data = await checkMemberApi(userIndex)
    dispatch({ type: SET_JOINED_POSTS, payload: data })
  } catch (e) {
    console.log(`This error occurring in setJoinedPosts action: ${e}`)
  }
}

export const setLikedPosts = (userIndex) => async (dispatch) => {
  try {
    const data = await getLikedPostsApi(userIndex)
    dispatch({ type: SET_LIKED_POSTS, payload: data })
  } catch (e) {
    console.log(`This error occurring in setLikedPosts action: ${e}`)
  }
}
