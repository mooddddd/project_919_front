import { Route, Routes } from "react-router-dom";
import {RecruitRouter} from "./community"

export const CommunityRouter = () => {
    return (
        <>
        <Routes>
            <Route path="recruit/*" element={<RecruitRouter/>}/>
        </Routes>
        </>
    )
}