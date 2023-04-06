import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/AuthProvider'
import { LogoutRequest } from '../../../utils/cookie'

export const Logout = () => {
  const navigate = useNavigate()
  const { setIsLoggedIn, setIsLoading } = useAuth()

  useEffect(() => {
    const performLogout = async () => {
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
