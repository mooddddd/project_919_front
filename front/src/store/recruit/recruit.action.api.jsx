import { request, domain } from '../../utils/axios'

export const getRecruitsApi = async (url) => {
  const response = await request.get(url)
  return Array.isArray(response.data) ? response.data : []
}

export const clickLikeApi = async (userIndex, recruitIndex) => {
  const response = await request.post(`${domain}like/clicklike`, {
    userIndex,
    recruitIndex,
  })
  return response.data
}

export const joinMemberApi = async (userIndex, recruitIndex) => {
  const response = await request.post(`${domain}recruit/joinmember`, {
    userIndex,
    recruitIndex,
  })
  return response.data
}

export const checkMemberApi = async (userIndex) => {
  const response = await request.get(`${domain}recruit/checkmember`, {
    params: userIndex,
  })
  return response.data
}

export const getLikedPostsApi = async (userIndex) => {
  const response = await request.get(`${domain}like/getuserlike/${userIndex}`)
  return response.data
}
