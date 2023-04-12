import { SET_LIKED_POSTS, SET_JOINED_POSTS } from './recruit.action.type.jsx'

import {
  apiClickLike,
  apiJoinMember,
  apiCheckMember,
  apiGetUserLikedPosts,
  apiGetUserJoinedPosts,
} from './recruit.action.api.jsx'

export const fetchLikedPosts = (userIndex) => async (dispatch) => {
  try {
    const likedPostsData = await apiGetUserLikedPosts(userIndex)
    dispatch({
      type: SET_LIKED_POSTS,
      payload: likedPostsData.reduce((acc, post) => {
        acc[post.recruitIndex] = true
        return acc
      }, {}),
    })
  } catch (e) {
    console.error(
      `Error FetchLikedPosts in recruit.action.controller.jsx: ${e}`
    )
  }
}

export const fetchJoinedPosts = (userIndex) => async (dispatch) => {
  try {
    const joinedPostsData = await apiGetUserJoinedPosts(userIndex)
    dispatch({
      type: SET_JOINED_POSTS,
      payload: joinedPostsData.reduce((acc, post) => {
        acc[post.recruitIndex] = true
        return acc
      }),
    })
  } catch (e) {
    console.error(
      `Error FetchJoinedPosts in recruit.action.controller.jsx: ${e}`
    )
  }
}

export const clickLike = (userIndex, recruitIndex) => async (dispatch) => {
  try {
    await apiClickLike(userIndex, recruitIndex)
  } catch (e) {
    console.error(`Error ClickLike in recruit.action.controller.jsx: ${e}`)
  }
}

export const joinMember = (userIndex, recruitIndex) => async () => {
  try {
    await apiJoinMember(userIndex, recruitIndex)
  } catch (e) {
    console.error(`Error JoinMember in recruit.action.controller.jsx: ${e}`)
  }
}
