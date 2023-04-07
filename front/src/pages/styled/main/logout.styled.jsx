import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/AuthProvider'
import { LogoutRequest } from '../../../utils/cookie'
import { domain, request } from '../../../utils/axios'

export const Logout = () => {
  const navigate = useNavigate()
  const { setIsLoggedIn, setIsLoading } = useAuth()

  useEffect(() => {
    const performLogout = async () => {
      request.post(`${domain}user/logout`)
      setIsLoading(true)
      await LogoutRequest()
      setIsLoggedIn(false)
      setIsLoading(false)
      navigate('/')
    }

    performLogout()
  }, [navigate, setIsLoggedIn, setIsLoading])

  return null
}
