import { request, domain } from '../../utils/axios'

export const getUserInfo = async (token) => {
  try {
    console.log('test local')
    const userResponse = await request.get(`${domain}user/getinfo`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    const userData = {
      ...userResponse.data,
      userPw: undefined,
    }

    return userData
  } catch (error) {
    throw new Error(`When error occured in user/getinfo: ${error}`)
  }
}
