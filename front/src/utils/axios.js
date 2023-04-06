import axios from 'axios'

export const domain = process.env.REACT_APP_AXIOS_DOMAIN

export const request = axios.create({
  baseURL: domain,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const requestMulter = axios.create({
  baseURL: domain,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
