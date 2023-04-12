import { request, domain } from '../../utils/axios'

export const apiClickLike = async (userIndex, recruitIndex) => {
  const response = await request.post(`${domain}like/clicklike`, {
    userIndex,
    recruitIndex,
  })
  return response.data
}

export const apiJoinMember = async (userIndex, recruitIndex) => {
  const response = await request.post(`${domain}recruit/joinmember`, {
    userIndex,
    recruitIndex,
  })
  return response.data
}

export const apiCheckMember = async (userIndex) => {
  const response = await request.get(`${domain}recruit/checkmember`, {
    params: userIndex,
  })
  return response.data
}

export const apiGetUserLikedPosts = async (userIndex) => {
  const response = await request.get(`${domain}like/getuserlike/${userIndex}`)
  return response.data
}

export const apiGetUserJoinedPosts = async (userIndex) => {
  const response = await request.get(`${domain}recruit/checkmember`, {
    params: userIndex,
  })
  return response.data
}
