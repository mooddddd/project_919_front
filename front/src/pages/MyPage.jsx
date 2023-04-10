import { Header, Footer } from '../common'
import { MyPageContent } from './index'
// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const MyPage = () => {
  //   const navigator = useNavigate()
  //   const isLogin = useSelector((state) => state.user.isLogin

  return (
    <>
      <Header />
      <MyPageContent />
      <Footer />
    </>
  )
}
