import { request, domain } from './axios'

export const getSignedUrl = async (file) => {
  try {
    const response = await request.get(
      `${domain}/aws/signedurl/project919file`,
      {
        params: {
          fileName: file.name,
          fielType: file.type,
        },
      }
    )
    return response.data
  } catch (e) {
    console.log(e)
    throw error
  }
}
