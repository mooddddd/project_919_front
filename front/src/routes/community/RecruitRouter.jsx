import { RecruitWrite, RecruitView, RecruitList } from '../../pages'
import { Routes, Route } from 'react-router-dom'

export const RecruitRouter = () => {
  return (
    <>
      <Routes>
        <Route path="write" element={<RecruitWrite />} />
        <Route path="view/:recruitIndex" element={<RecruitView />} />
        <Route path="list" element={<RecruitList />} />
        <Route path="modify/:recruitIndex" element={<RecruitWrite />} />
      </Routes>
    </>
  )
}
