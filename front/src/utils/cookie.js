import { request, domain } from './axios'

export const setCookie = (name, value, days) => {
  const date = new Date()
  date.setTime(date.getTime() + '1h')
  const expires = '; expires=' + date.toUTCString()
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

export const getCookie = (name) => {
  const value = '; ' + document.cookie
  const parts = value.split('; ' + name + '=')
  if (parts.length === 2) {
    return parts.pop().split(';').shift()
  }
}

export const LogoutRequest = async () => {
  const response = await request.get(`${domain}user/logout`)
  return response
}
