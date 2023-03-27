import { Routes, Route } from "react-router-dom"
import { Main, MyPage, Calculator, Community, SignUp, Login } from "../pages"

export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/community" element={<Community />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}
