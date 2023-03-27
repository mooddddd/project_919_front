import {RecruitWrite} from "../../pages"
import {Routes, Route} from "react-router-dom"

export const RecruitRouter = () => {
    return (
        <>
        <Routes>
            <Route path="write" element={<RecruitWrite/>}/>
        </Routes>
        </>
    )
}