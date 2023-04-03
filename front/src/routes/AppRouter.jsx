import { Routes, Route } from "react-router-dom";
import {
  Main,
  MyPage,
  Calculator,
  SignUp,
  Login,
  Certification,
} from "../pages";
import { CommunityRouter } from "./CommunityRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/community/*" element={<CommunityRouter />} />
      </Routes>
    </>
  );
};
