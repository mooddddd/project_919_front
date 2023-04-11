import { Routes, Route } from 'react-router-dom'
import {
  Main,
  MyPage,
  Calculator,
  SignUp,
  Login,
  Logout,
  Loading,
  Search,
} from '../pages'
import { CommunityRouter } from './CommunityRouter'
import { AuthProvider } from '../hooks/AuthProvider'

export const AppRouter = () => {
  return (
    <>
      <AuthProvider>
        <Loading />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/community/*" element={<CommunityRouter />} />
          <Route path="/search/*" element={<Search />} />
        </Routes>
      </AuthProvider>
    </>
  )
}
