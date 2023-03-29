import { Route, Routes } from "react-router-dom";
import { Header, Footer, BoardNav } from "../common";
import { RecruitRouter } from "./community";

export const CommunityRouter = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Header />} />
      </Routes>

      <Routes>
        <Route path="*" element={<BoardNav />} />
      </Routes>

      <Routes>
        <Route path="recruit/*" element={<RecruitRouter />} />
      </Routes>

      <Routes>
        <Route path="*" element={<Footer />} />
      </Routes>
    </>
  );
};
